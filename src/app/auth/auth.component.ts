import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: '<div>well this is wrong...</div>'
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public ngOnInit() {
    const fragmentParams = {};
    this.route.snapshot.fragment.split('&').forEach(p => {
      const d = p.split('=');
      fragmentParams[d[0]] = d[1];
    });

    const code = fragmentParams['access_token'];
    if (code) {
      window.localStorage.setItem('at', code);
      this.router.navigate(['/']);
    }
  }

}
