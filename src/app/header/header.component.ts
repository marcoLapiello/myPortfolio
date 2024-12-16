import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, DropdownMenuComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = "english";
  showModal = false;

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
