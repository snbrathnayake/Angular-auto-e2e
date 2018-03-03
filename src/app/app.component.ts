import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  
  constructor(private routes:Router){}

  navigateAbout(){
     this.routes.navigate(['/about']);
  }

  navigateHome(){
    this.routes.navigate(['/home']);
 }
}
