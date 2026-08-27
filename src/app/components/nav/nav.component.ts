import { Component } from '@angular/core';
import { CONTACT, NAV_LINKS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class NavComponent {
  readonly navLinks = NAV_LINKS;
  readonly contact = CONTACT;

  scrolled = false;
  mobileOpen = false;
  activeFragment = 'home';

  onScroll(): void {
    this.scrolled = window.scrollY > 40;
    this.updateActiveFragment();
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }

  private updateActiveFragment(): void {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;
    for (const link of this.navLinks) {
      const el = document.getElementById(link.fragment);
      if (!el) continue;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        this.activeFragment = link.fragment;
        break;
      }
    }
  }
}
