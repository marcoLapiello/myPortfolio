import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TranslateModule} from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, DropdownMenuComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage = 'en'; // Stato locale sincronizzato con il servizio
  showModal = false;

  constructor (private translationService: TranslationService){
    // Sottoscrivi al servizio per sincronizzare lo stato della lingua
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  // Metodo per cambiare lingua utilizzando il servizio
  switchLanguage(): void {
    this.translationService.switchLanguage();
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
