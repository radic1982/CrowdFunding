import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/security-service/authentication-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  loginButtonDisplay(){
    if (this.service.loggedIn()) { 
      return this.service.getCurrentUser().username + ' // logout'
    }
    return 'Login'
  }

}
