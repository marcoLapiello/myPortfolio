import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAndLinkService } from '../../scroll-and-links.service';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  emailAddress = "marcolapiello@gmail.com";
  constructor(private scrollAndLinkService: ScrollAndLinkService) {}

  sendEmail() {
    window.location.href = "mailto:${emailAddress}"
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
