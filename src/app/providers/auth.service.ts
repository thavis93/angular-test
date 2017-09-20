import {Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  message = '';
  errMessage: Subject<string> = new Subject<string>();

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  printerror(err) {
    this.message = err;
    this.errMessage.next(this.message);
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.printerror(err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.printerror(err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(function () {
      // logout successfull
    }).catch(function (error) {
      // an error happened
    });
  }

  loginWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
