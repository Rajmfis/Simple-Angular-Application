import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http:HttpClient,private fb: FormBuilder,private Auth:AuthService,private router: Router) {
    this.createForm();
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
    const emailid=target.querySelector('#userid').value
    const pwd=target.querySelector('#userpwd').value

    this.Auth.getUserDetails(emailid, pwd)
    .subscribe((response: any) =>{
      if(response.success===1){
        console.log(response);
        this.Auth.isLoggedIn=true;
        console.log(response.jwt);
        this.Auth.getDecodedAccessToken(response.jwt).subscribe((response)=>{
          console.log(response);
        });
        // this.Auth.data=jwt_decode(response.jwt);
        // Below 3 lines of decode the jwt token
        // let jwtData = response.jwt.split('.')[1]
        // let decodedJwtJsonData = window.atob(jwtData)
        // let decodedJwtData = JSON.parse(decodedJwtJsonData)

        // console.log(decodedJwtData["data"]);
        localStorage.setItem('jwt_token',JSON.stringify(response.jwt));
        // console.log(this.Auth.data);
        // this.router.navigate(['/user', ]);
      }else{
        console.log('invalid user');
      }
    })
    // console.log(emailid+' '+pwd);
  }
  
  

}
