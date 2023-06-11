import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
constructor(private api:ApiService,private formBuilder: FormBuilder,private router:Router) { }
user!:FormGroup;
ngOnInit(): void {
  console.log(localStorage.getItem('token'));
  this.user = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', Validators.required],
  
  });}
login(){
  console.log(this.user.value);
  this.api.login(this.user.value).subscribe((res:any)=>{
    console.log(res);
    let user={
      id:res[0]._id,
      username:res[0].username,
      role:res[0].role,
      amis:res[0].amis
    }
    localStorage.setItem('token',JSON.stringify(user));
    this.router.navigate(['/home']);

  },
  (err:any)=>{console.log(err);
  });
}
}
