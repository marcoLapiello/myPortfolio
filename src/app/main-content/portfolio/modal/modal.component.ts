import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() project!: any;
  @Input() projectId!: number;
  @Output() close = new EventEmitter<void>();


  closeModal(): void {
    this.close.emit();
  }
}
