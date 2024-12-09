import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-portfolio',
  imports: [ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  showModal = false;
  selectedProject = {};
  selectedProjectId!: number;

  projects = [
    {
      title: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      imgPath: "img/joinImg.png",
      modalImgPath: "img/joinImgBig.png",
      imgStyleClass: "projectImgTop",
      techIconsPaths: [
        'img/modal_technology_icons/javaScript.png',
        'img/modal_technology_icons/firebase.png',
        'img/modal_technology_icons/html.png',
        'img/modal_technology_icons/css.png',
      ]
      // gitHubLink:
      // liveTestLink:
    },
    {
      title: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imgPath: "img/elPolloImg.png",
      modalImgPath: "img/elPolloImgBig.png",
      imgStyleClass: "projectImgBottom",
      techIconsPaths: [
        'img/modal_technology_icons/javaScript.png',
        'img/modal_technology_icons/html.png',
        'img/modal_technology_icons/css.png',
      ]
      // gitHubLink:
      // liveTestLink:
    },
  ]

  openModal(project: {}, projectId: number): void {
    this.selectedProject = project;
    this.selectedProjectId = projectId + 1;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

}
