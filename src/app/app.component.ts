import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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
  logged = false;

  loggIn() {
    this.logged = true;
    alert('You are logged in!');
  }
}



