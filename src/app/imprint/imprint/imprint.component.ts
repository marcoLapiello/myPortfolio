import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  emailAddress = "marcolapiello@gmail.com";

  sendEmail() {
    window.location.href = `mailto:${this.emailAddress}`;
  }
}
