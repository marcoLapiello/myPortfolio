import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentLanguage!: string;

  constructor(private translationService: TranslationService){
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

}
