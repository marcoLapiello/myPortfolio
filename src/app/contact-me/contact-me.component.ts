import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  isChecked = false;

  checkUncheck(){
    if (!this.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

}
