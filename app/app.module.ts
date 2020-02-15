import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot([{
      path:'',
      component:HomeComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'user',
      component:UserComponent
    },
    {
      path:'profile',
      component:ProfileComponent
    },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }