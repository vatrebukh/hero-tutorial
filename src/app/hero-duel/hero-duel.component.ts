import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-duel',
  templateUrl: './hero-duel.component.html',
  styleUrls: ['./hero-duel.component.css']
})
export class HeroDuelComponent {
  constructor(private heroService: HeroService) {}

  myHero: Hero | undefined;
  otherHero: Hero | undefined;

  ngOnInit(): void {
    this.getDuel();
  }

  getDuel(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.myHero= heroes[0];
        this.otherHero = heroes[1]
      });
  }
}
