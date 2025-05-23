import { Component, Inject } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';

export interface ProjectDialogData {
  projectId: number;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslateModule, MaterialModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  projectId: number;
  projektLinkState = "";
  currentLanguage!: string;

  constructor(
    private projectsService: ProjectsService,
    private translationService: TranslationService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData
  ) {
    this.projectId = data.projectId;
    this.translationService.currentLanguage$.subscribe(
      (language) => (this.currentLanguage = language)
    );
    this.updateProjektLinkState();
  }

  get project() {
    return this.projectsService.getProjectById(this.projectId - 1);
  }

  get description(): string {
    return this.project?.descriptions[this.currentLanguage as 'en' | 'de'] || '';
  }
  closeModal(): void {
    // Add a small delay to allow exit animation
    this.dialogRef.close();
  }

  nextProject(): void {
    this.projectId = (this.projectId % this.projectsService.getProjectsLength()) + 1;
    this.updateProjektLinkState();
  }

  openGitHubRepo(): void {
    if (this.project?.gitHubLink) {
      window.open(this.project.gitHubLink, '_blank');
    }
  }

  openLiveTest(): void {
    if (this.project?.liveTestLink) {
      window.open(this.project.liveTestLink, '_blank');
    }
  }

  updateProjektLinkState(): void {
    this.projektLinkState = this.project?.liveTestLink && this.project.liveTestLink !== 'coming soon' ? 'live' : 'coming soon';
  }
}
