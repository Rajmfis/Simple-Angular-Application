import {CanActivate, UrlTree,Router,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs';
// import { map,take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
constructor(private authService:AuthService,private router: Router){}

canActivate() {
    console.log("OnlyLoggedInUsers");
    // if (this.authService.isLoggedIn) {
    //   return true;
    // }else {
    //   alert("You don't have permission to view this page. Please login");
    //   this.router.navigate(['']);//navigating to the home page
    //   return false;
    // }
    if (localStorage.getItem('jwt_token')) {
      return true;
    }else {
      alert("You don't have permission to view this page. Please login");
      this.router.navigate(['']);//navigating to the home page
      return false;
    }
  }

// canActivate(
//     route: ActivatedRouteSnapshot,
//     router: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Promise<boolean | UrlTree>
//     | Observable<boolean | UrlTree> {
//     return this.authService.user.pipe(
//       take(1),
//       map(user => {
//         const isAuth = !!user;
//         if (isAuth) {
//           return true;
//         }
//         return this.router.createUrlTree(['/user']);//will navigate to home page
//       }));
// }
}