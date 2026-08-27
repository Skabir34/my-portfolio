import { Component } from '@angular/core';

import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { StatsComponent } from './components/stats/stats.component';
import { FeaturedProjectComponent } from './components/featured-project/featured-project.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HowIBuildComponent } from './components/how-i-build/how-i-build.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    FeaturedProjectComponent,
    JourneyComponent,
    ExperienceComponent,
    SkillsComponent,
    HowIBuildComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = 'Shaikh Mohammed Shahrukh — Portfolio';
}
