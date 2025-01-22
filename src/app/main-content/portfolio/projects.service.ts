import { Injectable } from '@angular/core';

interface Project {
  title: string;
  descriptions: {
    en: string;
    de: string;
  };
  technologies: string[];
  imgPath: string;
  modalImgPath: string;
  imgStyleClass: string;
  techIconsPaths: string[];
  gitHubLink?: string;
  liveTestLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: "Join",
      descriptions: {
        en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        de: "Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu."
      },
      technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      imgPath: "img/joinImg.png",
      modalImgPath: "img/joinImgBig.png",
      imgStyleClass: "projectImgTop",
      techIconsPaths: [
        'img/modal_technology_icons/javaScript.png',
        'img/modal_technology_icons/firebase.png',
        'img/modal_technology_icons/html.png',
        'img/modal_technology_icons/css.png',
      ],
      gitHubLink: "https://github.com/marcoLapiello/Developer-Akademie-Join",
      liveTestLink: "https://join.marco-lapiello-developer.com"
    },
    {
      title: "El Pollo Loco",
      descriptions: {
        en: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        de: "Springen, rennen und werfen Sie in diesem Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen."
      },
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imgPath: "img/elPolloImg.png",
      modalImgPath: "img/elPolloImgBig.png",
      imgStyleClass: "projectImgBottom",
      techIconsPaths: [
        'img/modal_technology_icons/javaScript.png',
        'img/modal_technology_icons/html.png',
        'img/modal_technology_icons/css.png',
      ],
      gitHubLink: "https://github.com/marcoLapiello/El-pollo-loco---javascript-game",
      liveTestLink: "https://elpolloloco.marco-lapiello-developer.com"
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsLength(): number {
    return this.projects.length;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects[id];
  }

  getProjectDescription(projectTitle: string, language: 'en' | 'de'): string {
    const project = this.projects.find((p) => p.title === projectTitle);
    if (!project) {
      return '';
    }
    return project.descriptions[language] || '';
  }
}
