import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    

    

    <h1>Azure login test</h1>
    

    
  </header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() {
  }
}
