import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-dropdown-menu',
  imports: [CommonModule, TranslateModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent{
  currentLanguage = 'en'; // Stato sincronizzato con il servizio
  @Output() close = new EventEmitter<void>();

  constructor(private translationService: TranslationService) {
    // Sottoscrivi agli aggiornamenti della lingua dal servizio
    this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  // Metodo per cambiare lingua
  switchLanguage(): void {
    this.translationService.switchLanguage();
  }

  closeModal(): void {
    this.close.emit();
  }
}
