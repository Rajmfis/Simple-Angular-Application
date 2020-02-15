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

  ngOnInit(): void {
    
  }
  logout(){
    this.auth.logout();
  }
}
