import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-menu',
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent{
  language = "english";
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  switchLanguage() {
    if (this.language === "english") {
      this.language = "german";
    } else {
      this.language = "english";
    }
    
  }
}
