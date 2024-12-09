import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() project: any; // Dati del progetto corrente
  @Input() projects: any[] = []; // Lista di tutti i progetti
  @Output() close = new EventEmitter<void>(); // Evento per chiudere il modal

  currentIndex: number = 0;

  closeModal(): void {
    this.close.emit();
  }

  showPreviousProject(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.project = this.projects[this.currentIndex];
    }
  }

  showNextProject(): void {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.project = this.projects[this.currentIndex];
    }
  }
}
