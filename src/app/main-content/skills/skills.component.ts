import { Component, ElementRef, HostListener, inject } from '@angular/core';
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
  growthMindsetOpen = false;
  growthMindsetPulse = true;


  constructor(
    private scrollAndLinkService: ScrollAndLinkService,
    private elementRef: ElementRef
  ) { }

  translate = inject(TranslationService);

  scrollToSection(sectionId: string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedTarget = event.target as HTMLElement;
    const container = this.elementRef.nativeElement.querySelector('#growthMindsetContainer');
    const speechBubble = this.elementRef.nativeElement.querySelector('#speechBubble');
    if (
      container &&
      speechBubble &&
      !container.contains(clickedTarget) &&
      !speechBubble.contains(clickedTarget) &&
      this.growthMindsetOpen
    ) {
      this.closeGrowthMindset();
    }
  }

  showGrowthMindset(event: MouseEvent): void {
    if (window.matchMedia('(hover: none)').matches) {
      if (this.growthMindsetOpen) {
        this.closeGrowthMindset();
      } else {
        this.growthMindsetOpen = true;
        this.growthMindsetPulse = false;
      }
    }
  }

  closeGrowthMindset(): void {
    this.growthMindsetOpen = false;
    this.growthMindsetPulse = true;
  }
}

