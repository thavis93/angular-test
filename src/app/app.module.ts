import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent, DialogComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AngularFireModule} from 'angularfire2';
import {CommonModule} from '@angular/common';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DialogComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCdx0fpfzfi1rsJwWxGtcnGmtee4dMQ0js',
      authDomain: 'angular-test-e5dab.firebaseapp.com',
      databaseURL: 'https://angular-test-e5dab.firebaseio.com',
      projectId: 'angular-test-e5dab',
      storageBucket: 'angular-test-e5dab.appspot.com',
      messagingSenderId: '708733776771',
    }),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
]);
