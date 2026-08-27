import { Component } from '@angular/core';
import { ALIZ_TOURS } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-featured-project',
  imports: [RevealOnScrollDirective],
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.scss',
})
export class FeaturedProjectComponent {
  readonly project = ALIZ_TOURS;

  /** Opens the live Aliz Tours site in a new browser tab. */
  visitLiveSite(): void {
    window.open(this.project.liveUrl, '_blank', 'noopener');
  }
}
