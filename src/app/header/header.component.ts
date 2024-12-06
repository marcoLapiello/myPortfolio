import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = "english";

  switchLanguage() {
    if (this.language === "english") {
      this.language = "german";
    } else {
      this.language = "english";
    }
    
  }

}
