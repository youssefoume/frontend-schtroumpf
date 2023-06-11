import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent {
user:any;
constructor(private formBuilder:FormBuilder,private router :Router,private api:ApiService) { }
clicked:boolean =false;
role!:FormGroup;
ngOnInit(): void {
  this.getUser();
  this.role=this.formBuilder.group({
    role:['',Validators.required]
  });
}
getUser(){
  this.user=JSON.parse(localStorage.getItem('token')!);
  console.log("from profil"+this.user);
}
changer(){
  this.clicked=true;
}
modifierSchtroumpf(){
  this.api.modifierSchtroumpf(this.user.id,this.role.value).subscribe((res:any)=>{
    this.user.role = this.role.value.role;
    localStorage.setItem('token',JSON.stringify({
      id:res._id,
      username:res.username,
      role:res.role,
      amis:res.amis
    }));
    this.clicked=false;
   
  });
  

}
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/sign-in']);
}
}
