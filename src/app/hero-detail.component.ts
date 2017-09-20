import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

import { Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HeroesComponent} from './heroes.component';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() showdial: boolean;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    public heroesComponent: HeroesComponent,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.heroService.getHero(+params.get('id'));
      });
  }

  goBack(): void {
    this.location.back();
  }

  close(): void {
    this.heroesComponent.showDialog = false;
  }

  writeUserData(): void {
    this.heroesComponent.writeUserData(this.hero);
  }

  readUserData(): void {
    this.heroesComponent.readUserData(this.hero);
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(
    public heroesComponent: HeroesComponent,
  ) { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.heroesComponent.showDialog = false;
  }
}
