import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, DropdownMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = "english";
  showModal = false;

  switchLanguage() {
    if (this.language === "english") {
      this.language = "german";
    } else {
      this.language = "english";
    }
    
  }

  openCloseModal(): void {
    if (this.showModal == false) {
      this.showModal = true;
    } else {
      this.showModal = false;
    }
    
  }

  closeModal(): void {
    this.showModal = false;
  }

}
