import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/security-service/authentication-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public user;
  error = '';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
    this.user = {};
  }

  ngOnInit() {
  }

  login(): void {
    this.authenticationService.login(this.user.username, this.user.password)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['/projects']);
        },
        error => {
          this.error = error;
        });
  }

}
