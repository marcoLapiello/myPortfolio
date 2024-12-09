import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references = [
    {
      "text": "Im Rahmen eines gemeinsamen Projekts konnte ich die exzellente Zusammenarbeit mit Marco schätzen. Seine Zuverlässigkeit und organisatorischen Fähigkeiten waren beeindruckend. Darüber hinaus hat er durch seine motivierende Art maßgeblich zum Erfolg unseres Teams beigetragen.",
      "author": "Tümay Batman"
    },
    {
      "text": "Mit Marco zusammenzuarbeiten, war stets eine positive Erfahrung. Er hat nicht nur fundiertes Wissen, sondern auch ein gutes Auge für Details. Ich schätze besonders, dass er oft über den eigenen Aufgabenbereich hinausdenkt und damit neue Ansätze ins Team bringt. Seine Weitsicht hat dem Projekt immer wieder hilfreiche Impulse gegeben.",
      "author": "Richard Streu"
    },
    {
      "text": "Marco zeichnet sich durch herausragende organisatorische Fähigkeiten und eine klare, strukturierte Arbeitsweise aus. Er arbeitet stets zuverlässig, ist äußerst pünktlich und versteht es, Aufgaben effizient und zielorientiert zu planen. Seine Führungskompetenz zeigt sich in einem motivierenden Umgang mit dem Team und der Fähigkeit, Projekte erfolgreich zum Abschluss zu bringen.",
      "author": "Murat Catili"
    },
    {
      "text": "Marco hat sich für ein ansprechendes und benutzerfreundliches Design eingesetzt und durch seine JavaScript-Kenntnisse zur Verbesserung der Funktionalität des Projekts beigetragen. Die Zusammenarbeit war stets angenehm und zielführend.",
      "author": "Mirko Rinke"
    },
    {
      "text": "Mit Marco zusammenzuarbeiten, war stets eine positive Erfahrung. Er hat nicht nur fundiertes Wissen, sondern auch ein gutes Auge für Details. Ich schätze besonders, dass er oft über den eigenen Aufgabenbereich hinausdenkt und damit neue Ansätze ins Team bringt. Seine Weitsicht hat dem Projekt immer wieder hilfreiche Impulse gegeben.",
      "author": "David Werner"
    }
  ]

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
