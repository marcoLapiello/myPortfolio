import { Component, inject } from '@angular/core';
import { ScrollAndLinkService } from '../../scroll-and-links.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private scrollAndLinkService: ScrollAndLinkService) {}

  translate = inject(TranslationService);

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }
}
