import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAndLinkService } from '../scroll-and-links.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-footer',
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(TranslationService);
  emailAddress = "marcolapiello@gmail.com";

  constructor (private scrollAndLinkService: ScrollAndLinkService){}

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }

  sendEmail() {
    window.location.href = `mailto:${this.emailAddress}`;
  }

}
