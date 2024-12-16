import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  imports: [TranslateModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() projectId!: number;
  @Output() close = new EventEmitter<void>();

  currentLanguage!: string;

  constructor(
    private projectsService: ProjectsService,
    private translationService: TranslationService
  ) 
    {
    this.translationService.currentLanguage$.subscribe(
      (language) => (this.currentLanguage = language)
    );
  }

  
  get project() {
    return this.projectsService.getProjectById(this.projectId - 1);
  }

  
  get description(): string {
    return this.project?.descriptions[this.currentLanguage as 'en' | 'de'] || '';
  }

  closeModal(): void {
    this.close.emit();
  }

  nextProject(): void {
    this.projectId = (this.projectId % this.projectsService.getProjectsLength()) + 1;
  }

  openGitHubRepo(): void {
    if (this.project?.gitHubLink) {
      window.open(this.project.gitHubLink, '_blank');
    } else {
      console.error('GitHub link not available for this project.');
    }
  }

  openLiveTest(): void {
    if (this.project?.liveTestLink) {
      window.open(this.project.liveTestLink, '_blank');
    } else {
      console.error('Live test link not available for this project.');
    }
  }
}
