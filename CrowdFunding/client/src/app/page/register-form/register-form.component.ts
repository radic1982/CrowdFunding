import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/security-service/authentication-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public user;
  error = '';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
    this.user = {};
  }

  ngOnInit() {
  }

  register(): void {
    this.authenticationService.register(this.user.email, this.user.username, this.user.password)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          this.error = error;
        });
  }

}
