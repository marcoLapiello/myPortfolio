import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAndLinkService } from '../scroll-and-links.service';


@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor (private scrollAndLinkService: ScrollAndLinkService){}

  scrollToSection(sectionId:string): void {
    this.scrollAndLinkService.scrollToSection(sectionId);
  }

}
