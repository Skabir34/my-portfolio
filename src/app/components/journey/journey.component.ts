import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { JOURNEY_STEPS } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-journey',
  imports: [RevealOnScrollDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
  host: {
    '(window:scroll)': 'updateFill()',
    '(window:resize)': 'updateFill()',
  },
})
export class JourneyComponent implements AfterViewInit {
  readonly steps = JOURNEY_STEPS;

  private readonly stepsContainer = viewChild<ElementRef<HTMLElement>>('stepsContainer');
  fillHeight = 0;

  ngAfterViewInit(): void {
    this.updateFill();
  }

  updateFill(): void {
    const container = this.stepsContainer()?.nativeElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    let progress = (vh * 0.55 - rect.top) / total;
    progress = Math.max(0, Math.min(1, progress));
    this.fillHeight = progress * 100;
  }
}
