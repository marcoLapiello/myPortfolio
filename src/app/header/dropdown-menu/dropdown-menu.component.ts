import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [CommonModule, TranslateModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent{
  language = "english";
  @Output() close = new EventEmitter<void>();

  constructor (private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage() {
    if (this.language === "english") {
      this.language = "german";
      this.translate.use('de');
      
    } else {
      this.language = "english";
      this.translate.use('en');
    }
    
  }

  closeModal(): void {
    this.close.emit();
  }
}
