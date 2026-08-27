# Shaikh Mohammed Shahrukh — Portfolio (Angular 21)

Premium, dark, animated Angular portfolio, migrated to **Angular 21** using
modern standalone APIs.

## What changed in the Angular 21 migration

- **Standalone everywhere** — `AppModule` / `AppRoutingModule` are gone.
  The app bootstraps with `bootstrapApplication()` (`src/main.ts`) using an
  `ApplicationConfig` (`src/app/app.config.ts`). Every component/directive
  is standalone by default (Angular 21's default), importing only what it
  needs directly in its `@Component`/`@Directive` decorator.
- **Zoneless change detection** — `provideZonelessChangeDetection()` is
  registered in `app.config.ts` and `zone.js` has been dropped entirely
  (no polyfill, no dependency).
- **New esbuild-based builder** — `angular.json` uses
  `@angular/build:application` / `@angular/build:dev-server` instead of the
  old `@angular-devkit/build-angular:browser` builder.
- **Built-in control flow** — every `*ngFor` / `*ngIf` has been replaced
  with the native `@for` / `@if` block syntax (with explicit `track`
  expressions), so `CommonModule` is no longer imported anywhere.
- **Signal inputs** — `CountUpDirective`'s `@Input()`s were converted to
  `input()` signals; `JourneyComponent`'s `@ViewChild` became a
  `viewChild()` signal query.
- **Host listener consolidation** — `@HostListener('window:scroll')` /
  `@HostListener('window:resize')` were moved into the `host: {}` metadata
  object on `NavComponent` and `JourneyComponent`.
- **`inject()` over constructor injection** — the two shared directives now
  use `inject(ElementRef)` instead of constructor parameters.
- TypeScript config updated to `moduleResolution: "bundler"` and
  `module: "preserve"`, matching current Angular CLI defaults.

## Getting started

```bash
npm install
npm start        # ng serve — http://localhost:4200
npm run build    # production build to dist/shahrukh-portfolio
```

Requires Node 20.11+ (or 22+) and Angular CLI 21
(`npm i -g @angular/cli@21` if you don't have it globally).

## Project structure

```
src/
  app/
    app.config.ts                 # ApplicationConfig (zoneless, router)
    app.routes.ts                 # route table (empty — single scrolling page)
    core/data/portfolio-data.ts   # single source of truth for all copy
    shared/directives/            # scroll-reveal + count-up animations
    components/                   # one standalone component per page section
  assets/cv/                      # the downloadable CV PDF
  styles.scss                     # design tokens (colors, type) + base styles
```

Each landing-page section (hero, about, stats, featured project, journey,
experience, skills, philosophy, contact) is its own standalone Angular
component under `src/app/components/`, so you can reorder, restyle, or
extend any one of them independently.

## Things worth double-checking before you publish

- The Aliz Tours screenshot area is a styled placeholder frame — swap in
  real product screenshots when you have them (see
  `featured-project.component.html`).
- Payment integration on Aliz Tours is labeled "planned," matching the CV.
- Your phone number lives in `portfolio-data.ts` (`CONTACT.phone`) but is
  intentionally not rendered on the page, per the original "no phone
  number" content rule — surface it manually if you'd like it shown.
