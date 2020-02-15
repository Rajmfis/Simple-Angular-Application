import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.user.logout().subscribe(data=>{
      if(data.success===1){
        this.router.navigate(['/login']);
      }
    })
  }

}