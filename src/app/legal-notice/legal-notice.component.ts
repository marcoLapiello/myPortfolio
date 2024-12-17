import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { ScrollAndLinkService } from '../scroll-and-links.service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentLanguage!: string;

  constructor(
    private translationService: TranslationService,
    private scrollAndLinkService: ScrollAndLinkService
  ){
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }

}
