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
    public authService: AuthService
  ) {}
  // loginWithEmail(email: string, password: string): firebase.Promise<any> {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  // }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.service.html',
})

export class AuthComponent {
  logged = false;
  email: string;
  password: string;

  constructor(
    public authService: AuthService) {}

  singUp() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }


  loggIn() {
    this.authService.login(this.email, this.password);
    // this.logged = true;
    this.email = this.password = '';
  }

  logOut() {
    this.authService.logout();
  }
}



