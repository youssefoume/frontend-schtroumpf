import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ApiService, private root : Router){}

  canActivate() {
    if( this.api.isLoggedIn() ){
      return true;
    } 
    alert("You aren't logged in !!!");
    this.root.navigate(['/sign-in']);
    return false;
  }
  
}