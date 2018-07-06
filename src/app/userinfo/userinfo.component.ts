import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './userinfo.component.html'
})
export class UserInfoComponent implements OnInit {
  public userinfo: any;
  public error: any;

  public loginUrl = `https://login.microsoftonline.com/${environment.tenant}/oauth2/v2.0/authorize?client_id=${environment.clientId}&response_type=token&redirect_uri=${encodeURI(environment.azureReturnUrl)}&scope=openid%20profile%20User.Read&state=12345`;
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
