import { Component } from '@angular/core';
import { ScrollAndLinkService } from '../../scroll-and-links.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private scrollAndLinkService: ScrollAndLinkService) {}

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }
}
