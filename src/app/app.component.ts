import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schtroumpf-front';
  constructor(private api:ApiService) { }
  logout(){
    localStorage.removeItem('token');  }
}
