import { Component, inject } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-portfolio',
  imports: [ModalComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: any[] = [];
  translate = inject(TranslationService);
  showModal = false;
  selectedProject = {};
  selectedProjectId!: number;

  constructor(private projectsService: ProjectsService){
    this.projects = this.projectsService.getProjects();
  }

  openModal(project: {}, projectId: number): void {
    document.body.style.overflow = 'hidden';
    this.selectedProject = project;
    this.selectedProjectId = projectId + 1;
    this.showModal = true;
  }

  closeModal(): void {
    document.body.style.overflow = '';
    this.showModal = false;
  }

}
