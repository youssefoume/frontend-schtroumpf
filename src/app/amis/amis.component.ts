import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent {
constructor(private api:ApiService,private router:Router) { }
amis:any;
ngOnInit(): void {
this.getAllAmis();
}
removeFriend(ami:any,){
let user=JSON.parse(localStorage.getItem('token')!);
const body = { id: ami._id };
this.api.deleteAmis(user.id,body).subscribe((res:any)=>{

this.api.findSchtroumpfById(user.id).subscribe((res:any)=>{
  console.log(res);
localStorage.setItem('token',JSON.stringify({
  id:res._id,
  username:res.username,
  role:res.role,
  amis:res.amis
}));
});
this.api.getALlSchtroumpfs().subscribe((res: any) => {
  this.amis = res.filter((schtroumpf: any) => user.amis.includes(schtroumpf._id));
});
this.ngOnInit();
});
}
getAllAmis() {
let user=JSON.parse(localStorage.getItem('token')!);
this.api.getALlSchtroumpfs().subscribe((res: any) => {
this.amis = res.filter((schtroumpf:any)=>user.amis.includes(schtroumpf._id));
});
}

}
