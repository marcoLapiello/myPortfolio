import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-portfolio',
  imports: [ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    {
      title: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      imgPath: "img/joinImg.png",
      imgStyleClass: "projectImgTop",
      // iconsPaths: []
      // gitHubLink:
      // liveTestLink:
    },
    {
      title: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imgPath: "img/elPolloImg.png",
      imgStyleClass: "projectImgBottom",
      // iconsPaths: []
      // gitHubLink:
      // liveTestLink:
    },
  ]

}
