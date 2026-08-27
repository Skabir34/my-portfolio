import { Component } from '@angular/core';
import { CONTACT, HERO } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly contact = CONTACT;
  readonly hero = HERO;
}
