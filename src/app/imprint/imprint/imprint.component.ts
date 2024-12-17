import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { ScrollAndLinkService } from '../../scroll-and-links.service';

@Component({
  selector: 'app-imprint',
  imports: [RouterModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  emailAddress = "marcolapiello@gmail.com";
  currentLanguage!: string;

  constructor(
    private translationService: TranslationService,
    private scrollAndLinkService: ScrollAndLinkService
  ){
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  sendEmail() {
    window.location.href = `mailto:${this.emailAddress}`;
  }

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }
}
