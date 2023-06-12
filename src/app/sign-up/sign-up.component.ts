import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user!:FormGroup;
constructor(private router:Router,private api:ApiService,private formBuilder: FormBuilder) { }
ngOnInit(): void {
this.user = this.formBuilder.group({
username: ['', Validators.required],
password: ['', Validators.required],
role: ['', Validators.required],

});}
register() {
this.api.registerSchtroumpf(this.user.value).subscribe((res: any) => {
if(this.api.isLoggedIn()){this.router.navigate(['/home']);}
this.router.navigate(['/sign-in']);
},
(err: any) => {console.log(err);
});}

}
