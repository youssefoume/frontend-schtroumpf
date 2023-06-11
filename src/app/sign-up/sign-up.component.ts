import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user!:FormGroup;
constructor(private api:ApiService,private formBuilder: FormBuilder) { }
ngOnInit(): void {
this.user = this.formBuilder.group({
username: ['', Validators.required],
password: ['', Validators.required],
role: ['', Validators.required],

});}
register() {
this.api.registerSchtroumpf(this.user.value).subscribe((res: any) => {
console.log(res);
},
(err: any) => {console.log(err);
});}

}
