import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users=this.auth.data;
  constructor(private auth:AuthService,private router:Router) { }
  id:any;
  ngOnInit(): void {
    this.users=JSON.parse(localStorage.getItem('jwt_token'));
  }
  deleteUser(){
    this.id=this.users.id;
    this.auth.delete(this.id).subscribe((response) =>{
      if(response.success===0){
        alert('user not deleted');
      }else{
        alert('User deleted');
      }
    });
  }
  
  OnLogout(){
    this.auth.logout();
  }
}
