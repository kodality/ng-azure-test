import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './userinfo.component.html'
})
export class UserInfoComponent implements OnInit {
  private userinfo: any;
  private error: any;

  public loginUrl = 'https://login.microsoftonline.com/3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57/oauth2/v2.0/authorize?client_id=142a3733-584a-47f9-acba-8e945d366935&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3a4201%2Fauth&scope=openid%20profile%20User.Read&state=12345';
  public userinfoUrl = 'https://graph.microsoft.com/v1.0/me/';

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    const at = window.localStorage.getItem('at');
    if (at) {
      this.http.get(this.userinfoUrl, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + at })
      }).subscribe(resp => {
        this.userinfo = resp;
      }, err => {
        this.error = err;
      });
    }
  }

  public logout() {
    window.localStorage.removeItem('at');
    delete this.userinfo;
  }

}
