import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService} from './providers/auth.service';


@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'My App Title';
  footnote = 'Created by Bart';
  clock = Observable
    .interval(1000)
    .map(() => {
      return new Date();
    });

  constructor(
    public authService: AuthService,
  ) {}
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.service.html',
})

export class AuthComponent {
  email: string;
  password: string;
  messagea: string;

  constructor(
    public authService: AuthService,
    ) {this.messagea = authService.message; }

  singUp() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log(this.authService.message);
  }


  loggIn() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    this.messagea = this.authService.message;
  }

  logOut() {
    this.authService.logout();
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}



