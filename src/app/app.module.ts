import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './userinfo/userinfo.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: UserInfoComponent},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
