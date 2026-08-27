import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

/**
 * Adds the `reveal-up` class to the host element and toggles `in-view`
 * once the element scrolls into the viewport. Pairs with the
 * `.reveal-up` / `.in-view` styles defined in src/styles.scss.
 */
@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    host.classList.add('reveal-up');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            host.classList.add('in-view');
            this.observer?.unobserve(host);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
