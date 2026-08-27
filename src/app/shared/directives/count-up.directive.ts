import { AfterViewInit, Directive, ElementRef, OnDestroy, input, inject } from '@angular/core';

/**
 * Animates a numeric counter from 0 to [appCountUp] once the host
 * element enters the viewport. Optional [countSuffix] (e.g. '%', '+').
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly target = input(0, { alias: 'appCountUp' });
  readonly countSuffix = input('');

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate(host);
            this.observer?.unobserve(host);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(host);
  }

  private animate(host: HTMLElement): void {
    const duration = 1400;
    const start = performance.now();
    const target = this.target();
    const suffix = this.countSuffix();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      host.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
