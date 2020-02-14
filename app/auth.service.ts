import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http:HttpClient) { }

  public data;

  getUserDetails(id,pwd){
    //post these details to api server return 
    return this.http.post('http://localhost:8080/users/'+id, {
      // id,
      pwd
    },this._options)
    // .subscribe(data=>{
    //   console.log(data, "We got from the server")
    //   this.data = data;
    // }) 
  }
}
