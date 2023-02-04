import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-hero-duel',
  templateUrl: './hero-duel.component.html',
  styleUrls: ['./hero-duel.component.css']
})
export class HeroDuelComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  myHero!: Hero;
  otherHero!: Hero;
  activeHero!: Hero;
  inactiveHero!: Hero;

  ngOnInit(): void {
    this.getDuel();
  }

  getDuel(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.myHero= heroes[0];
        this.otherHero = heroes[1]
        this.activeHero = this.myHero
        this.inactiveHero = this.otherHero
        this.messageService.clear()
        this.messageService.add(`Duel: ${this.myHero.name} vs ${this.otherHero.name}`)
      });
  }

  fight() {
    this.inactiveHero.health -= this.activeHero.attack
    if (this.inactiveHero.health <= 0) {
      this.inactiveHero.health = 0
      this.messageService.add(`Duel: ${this.activeHero.name} won!`)
      return
    }
    this.messageService.add(`${this.activeHero.name} hits ${this.activeHero.attack} points from ${this.inactiveHero.name}(${this.inactiveHero.health})`)
    this.swapHeroes();
  }

  private swapHeroes() {
    if (this.activeHero.name == this.myHero.name) {
      this.activeHero = this.otherHero
      this.inactiveHero = this.myHero
    } else {
      this.activeHero = this.myHero
      this.inactiveHero = this.otherHero
    }
  }
}
