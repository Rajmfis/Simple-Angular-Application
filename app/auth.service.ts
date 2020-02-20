import { Injectable } from '@angular/core';
import { Headers,HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public generated_token:any;

  constructor(private http:HttpClient,private router:Router) { }

	public isLoggedIn: boolean = false;
  public data;

  addUserDetails(fname, lname,phone,email,admin,pwd){
    //post these details to api server return 
    return this.http.post('http://localhost:8080/users', {
      fname, lname,phone,email,admin,pwd
    },this._options);
  }

  getUserDetails(email,pwd){
    //post these details to api server return 
    return this.http.post('http://localhost:8080/alert', {
      email,
      pwd
    },this._options);
  }

  getDecodedAccessToken(token: string): Observable<any> {

    console.log("token = ", token);

    
  return this.http.post('http://localhost:8080/admin-users', {}, { 
      headers: new HttpHeaders({
        'jwt': token,
      })
    });

  }


  delete(id){
    const token = localStorage.getItem('jwt_token');
    if(token) {
      return this.http.delete('http://localhost:8080/users/'+id, this._options);
    }else{
      alert('unable to delete');
    }
  }

  logout() {
    this.router.navigate(['/login']);
    this.isLoggedIn=false;
    localStorage.removeItem('jwt_token');
  }
}
