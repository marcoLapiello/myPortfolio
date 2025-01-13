import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAndLinkService } from '../../scroll-and-links.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  emailAddress = "hello@marco-lapiello-developer.com";
  constructor(private scrollAndLinkService: ScrollAndLinkService) {}

  translate = inject(TranslationService);

  sendEmail() {
    window.location.href = `mailto:${this.emailAddress}`;
  }

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }

  linkToGitHub() {
    this.scrollAndLinkService.linkToGitHub();
  }

  linkToLinkedIn() {
    this.scrollAndLinkService.linkToLinkedIn();
  }
}
