import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Home';
  person = 'steve';

  constructor(private routes: Router) {

  }

  ngOnInit() { }

  navigateAbout() {
    this.routes.navigate(['/about']);
  }

  navigateHome() {
    this.routes.navigate(['/home']);
  }
}
