import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {AppComponent, AuthComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent, DialogComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AngularFireModule} from 'angularfire2';
import {CommonModule} from '@angular/common';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './providers/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DialogComponent,
    HeroesComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'personas',
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
  providers: [HeroService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

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
