/**This should become home component */

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
@Component({
  selector: 'my-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, 
    private authService: AuthService,
    private router: Router) {
   
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


  /*Dialog*/
  display: boolean = false;

    showDialog() {
        this.display = true;
    }
    closeDialog(){
      this.display = false;
    }
   ngOnInit() {    
   


       // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(10);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() =>{ this.idleState = 'No longer idle.'});
    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.closeOrCancelHandler();
    });
    this.idle.onIdleStart.subscribe(() => {this.idleState = 'You\'ve gone idle!';});
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';

      console.log(this.idleState);
      this.showDialog();
    });


    this.reset();

  }

//check if logged in
 get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout();    
    this.router.navigate(['/login']);
  }
  continueSession(){
    console.log("Hi");
     this.reset();
     this.closeDialog();
  }
  closeOrCancelHandler(){
    this.closeDialog();
    this.idle.ngOnDestroy();
    this.logout();
  }
}