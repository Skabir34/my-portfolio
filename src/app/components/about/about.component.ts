import { Component } from '@angular/core';
import { ABOUT_PARAGRAPHS, FOCUS_LIST } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly paragraphs = ABOUT_PARAGRAPHS;
  readonly focusList = FOCUS_LIST;
}
