import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private api : ApiService,private root : Router){}

  canActivate(){
    if(!this.api.isLoggedIn()){
      return true;
    }
    this.root.navigate(['/home']);
    return false;
  }
  
}