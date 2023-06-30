import { Router, UrlTree } from "@angular/router";
import { AuthsService } from "../services/auths.service";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class loginGuard {

  constructor(private authservice: AuthsService, private router: Router) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (!this.authservice.isAuthenticated()) {
      console.log('Please Log In!');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}