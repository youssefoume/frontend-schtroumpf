import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private api:ApiService,private router :Router) { }
  Schroumpfs:any;
  user:any
  ngOnInit(): void {
    this.getAllSchtroumpfs();
    
  }
  getAllSchtroumpfs() {
    this.user=JSON.parse(localStorage.getItem('token')!);
    console.log(this.user);
    this.api.getALlSchtroumpfs().subscribe((res: any) => {
      this.Schroumpfs = res.filter((schtroumpf:any)=>schtroumpf._id!=this.user.id);
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
      });
      this.ngOnInit();
    });
  }
  

}
