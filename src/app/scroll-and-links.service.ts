import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAndLinkService {
  gitHubLink = "https://github.com/marcoLapiello";
  linkedInLink = "https://www.linkedin.com/in/marco-lapiello/";
 
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  linkToGitHub(){
    window.open(this.gitHubLink, '_blank');
  }

  linkToLinkedIn(){
    window.open(this.linkedInLink, '_blank');
  }
}
