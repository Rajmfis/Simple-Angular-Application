import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private Auth:AuthService,private router: Router) {
    this.createForm();
    // this.Auth.data='';
    localStorage.removeItem('jwt_token');
  }

  ngOnInit(): void {
    
  }
  createForm() {
    this.angForm = this.fb.group({
       id: ['', Validators.required ],
       password: ['', Validators.required ]
    });
    
  }
  loginUser(event){
    event.preventDefault();
    const target=event.target
    const userid=target.querySelector('#userid').value
    const pwd=target.querySelector('#userpwd').value

    this.Auth.getUserDetails(userid, pwd)
    .subscribe((response) =>{
      if(response.success===1){
        console.log(response);
        this.Auth.data=response;
        this.Auth.isLoggedIn=true;
        this.Auth.generated_token=response.jwt;
        this.Auth.data=response;
        localStorage.setItem('jwt_token',JSON.stringify(response));
        // localStorage.setItem('jwt_token',this.Auth.generated_token);
        // localStorage.setItem('jwt_token',this.Auth.generated_token);
        // localStorage.setItem('jwt_token',this.Auth.generated_token);
        this.router.navigate(['/user', ]);
      }else{
        alert('invalid user');
      }
    })
    console.log(userid+' '+pwd);
  }
 
}
