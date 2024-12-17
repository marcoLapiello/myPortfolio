import { Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { ReferencesService } from './references.service';

@Component({
  selector: 'app-references',
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references: any[] = [];
  currentLanguage!: string;

  constructor(
    private referencesService: ReferencesService,
    private translationService: TranslationService
  ){
    this.references = this.referencesService.getReferences();
    this.translationService.currentLanguage$.subscribe(
      (language) => (this.currentLanguage = language)
    );
  }

  activeIndex = 0;
  arrowIsClicked = false;

  @ViewChildren('singleReference') singleReferenceElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;


  scrollToActiveReference(): void {
    const scrollContainer = this.scrollContainer.nativeElement;
    const activeElement = this.singleReferenceElements.toArray()[this.activeIndex]?.nativeElement;
    
    if (scrollContainer && activeElement) {
      let scrollPosition = this.getCoordinatesToScrollTo(scrollContainer, activeElement);
      this.arrowIsClicked = true;
      scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth'});
      setTimeout(() => {
        this.arrowIsClicked = false;
      }, 400);
    }
  }

  getCoordinatesToScrollTo(scrollContainer:HTMLDivElement, activeElement:HTMLDivElement){
    const containerCenter = scrollContainer.offsetWidth / 2;
    const elementOffset = activeElement.offsetLeft + activeElement.offsetWidth / 2;
    const scrollPosition = elementOffset - containerCenter;
    return scrollPosition
  }

  calculateClosestIndex(scrollContainer: HTMLDivElement, referencesArray: ElementRef<HTMLDivElement>[]): number {
    let closestIndex = 0;
    let closestDistance = Infinity;

    referencesArray.forEach((ref, index) => {
      const element = ref.nativeElement;
      const distance = Math.abs((element.offsetLeft + element.offsetWidth / 2) - (scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2));
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    return closestIndex;
  }
  
  updateActiveIndexOnManualScroll(): void {
    if (this.arrowIsClicked) {
      return;
    }
    const scrollContainer = this.scrollContainer.nativeElement;
    const referencesArray = this.singleReferenceElements.toArray();
    this.activeIndex = this.calculateClosestIndex(scrollContainer, referencesArray);
  }

  nextReference(): void {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
    this.scrollToActiveReference();
  }

  previousReference(): void {
    this.activeIndex = (this.activeIndex - 1 + this.references.length) % this.references.length;
    this.scrollToActiveReference();
  }
  
}
