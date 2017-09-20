import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { AngularFireDatabase, AngularFireDatabaseProvider, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  showDialog = false;
  items: FirebaseListObservable<any[]>;

  constructor(
    private heroService: HeroService,
    public af: AngularFireDatabase,
  ) {
    this.items = af.list('/items');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  changeShowDialog(): boolean {
    this.showDialog = !this.showDialog;
    return this.showDialog;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  writeUserData(hero: Hero): void {
    firebase.database().ref('heroes/' + hero.id).set({
      heroname: hero.name,
      power: hero.power,
    });
  }


  readUserData(hero: Hero) {
    //
  }
}

