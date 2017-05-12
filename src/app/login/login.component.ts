import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '',company:''};
  successMessage: string = '';
  errorMessage: string = '';
  loading=false;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {}  

  /**
   * Login a user
   */
  login() {
    this.errorMessage = '';
    this.loading=true;
    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['/']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }

}