import { Component } from '@angular/core';
import { BUILD_PRINCIPLES } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-how-i-build',
  imports: [RevealOnScrollDirective],
  templateUrl: './how-i-build.component.html',
  styleUrl: './how-i-build.component.scss',
})
export class HowIBuildComponent {
  readonly principles = BUILD_PRINCIPLES;
}
