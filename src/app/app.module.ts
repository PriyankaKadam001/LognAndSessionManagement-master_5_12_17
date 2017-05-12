import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import {DialogModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { UsersComponent } from './users/users.component';

import { AuthGuard } from './shared/services/guard';

import { UserService } from './shared/services/user.service';

import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
@NgModule({
  declarations: [
     AppComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    DialogModule,
    routing
  ],
  providers: [UserService,
    AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }