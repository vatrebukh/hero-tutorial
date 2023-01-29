import {Component, Input} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-fighter',
  templateUrl: './hero-fighter.component.html',
  styleUrls: ['./hero-fighter.component.css']
})
export class HeroFighterComponent {
  @Input() hero?: Hero
}
