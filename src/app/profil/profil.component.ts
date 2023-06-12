import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private builder:FormBuilder,private api:ApiService,private router :Router) { }
  Schroumpfs:any;
  user:any
  added:boolean=false;
  newuser!:FormGroup; 
  ngOnInit(): void {
    this.getAllSchtroumpfs();
    this.newuser=this.builder.group({
      username:[''],
      password:[''],
      role:['']
    });  
    
  }
  getAllSchtroumpfs() {
    this.user=JSON.parse(localStorage.getItem('token')!);
    console.log(this.user);
    this.api.getALlSchtroumpfs().subscribe((res: any) => {
      this.Schroumpfs = res.filter((schtroumpf:any)=>!this.user.amis.includes(schtroumpf._id) && schtroumpf._id!=this.user.id);
    });

  }
 
  removeFriend(id:any){
  console.log(id);
  }
  addFriend(id:any){
    this.api.addAmis(this.user.id,{id:id}).subscribe((res:any)=>{
      console.log(res);
      this.api.findSchtroumpfById(this.user.id).subscribe((res:any)=>{
        console.log(res);
      localStorage.setItem('token',JSON.stringify({
        id:res._id,
        username:res.username,
        role:res.role,
        amis:res.amis
      }));
      this.getAllSchtroumpfs();
      });
      
    });
  }
  addUser(){
  this.added=true;
  
  }
  register(){
    this.api.registerSchtroumpf(this.newuser.value).subscribe((res:any)=>{
      this.api.addAmis(this.user.id,{id:res._id}).subscribe((res:any)=>{
         this.api.findSchtroumpfById(this.user.id).subscribe((res:any)=>{
        console.log(res);
      localStorage.setItem('token',JSON.stringify({
        id:res._id,
        username:res.username,
        role:res.role,
        amis:res.amis
      }));
      this.getAllSchtroumpfs();
      });
    });
    this.added=false;
  });}
  

}
