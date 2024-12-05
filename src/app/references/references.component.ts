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
      "text": "The attention to detail and creativity that Marco brings to his work is truly remarkable. He has the ability to transform even the vaguest ideas into functional and visually stunning results. His dedication to perfection and his deep understanding of frontend development make him a valuable asset to any team. I am constantly amazed at how he goes above and beyond expectations in every project.",
      "author": "Sophia Reynolds"
    },
    {
      "text": "Working with Marco was an absolute pleasure from start to finish. He not only possesses exceptional technical skills but also brings a collaborative spirit that makes the process enjoyable and productive. His ability to analyze complex challenges and provide practical, innovative solutions is unmatched. Marco's professionalism and commitment to excellence are evident in every aspect of his work.",
      "author": "James Carter"
    },
    {
      "text": "Marco has an extraordinary talent for turning ideas into reality. His designs are not only functional but also carry a unique elegance that sets them apart. His ability to listen and adapt to feedback ensures that the final product aligns perfectly with the vision. Whether it's a small task or a large-scale project, Marco delivers with precision and creativity that exceed expectations.",
      "author": "Isabella Hart"
    },
    {
      "text": "I was thoroughly impressed by Marco's ability to handle tight deadlines without compromising on quality. His time management skills are impeccable, and his work ethic is admirable. Despite the pressure, Marco remains calm, focused, and solution-oriented, which inspires confidence in the team. His attention to detail ensures that every aspect of the project is executed flawlessly.",
      "author": "Liam Turner"
    },
    {
      "text": "Marco is an exceptional team player whose expertise in frontend development has a profound impact on any project he is part of. He is not only technically skilled but also incredibly supportive, ensuring that everyone on the team feels empowered and valued. His innovative approach to problem-solving and his relentless pursuit of excellence make him an indispensable contributor to any initiative.",
      "author": "Emma Collins"
    }
  ]

  activeIndex = 0;
  arrowIsClicked = false;

  @ViewChildren('singleReference') singleReferenceElements!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;


  scrollToActiveReference(): void {
    const scrollContainer = this.scrollContainer.nativeElement; // Contenitore scrollabile
    const activeElement = this.singleReferenceElements.toArray()[this.activeIndex]?.nativeElement; // Elemento attivo
    
    
    if (scrollContainer && activeElement) {
      let scrollPosition = this.getCoordinatesToScrollTo(scrollContainer, activeElement);

      this.arrowIsClicked = true;
    
      // Esegui lo scroll per centrare l'elemento attivo
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth', // Scroll fluido
      });

      setTimeout(() => {
        this.arrowIsClicked = false;
      }, 400);
    }
  }

  getCoordinatesToScrollTo(scrollContainer:HTMLDivElement, activeElement:HTMLDivElement){
    // Calcola la posizione necessaria per centrare l'elemento attivo
    const containerCenter = scrollContainer.offsetWidth / 2; // Centro del contenitore
    const elementOffset = activeElement.offsetLeft + activeElement.offsetWidth / 2; // Centro dell'elemento attivo
    const scrollPosition = elementOffset - containerCenter; // Posizione da scrollare
    return scrollPosition
  }

  updateActiveIndexOnScroll(): void {
    if (this.arrowIsClicked) {
      return;
    }
    const scrollContainer = this.scrollContainer.nativeElement;
    const referencesArray = this.singleReferenceElements.toArray();

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

    this.activeIndex = closestIndex;
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
