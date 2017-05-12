import { Component,OnInit} from '@angular/core';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { userService } from './shared/services/userService';
import {User} from './shared/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[userService]
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private router: Router) {
   
  }

 /*Dialog*/
  display: boolean = false;

    showDialog() {
        this.display = true;
    }
  users: User[];

   ngOnInit() {  

     
  }

}