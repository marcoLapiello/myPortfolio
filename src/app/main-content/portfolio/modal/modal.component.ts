import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() allProjects!: any;
  @Input() project!: any;
  @Input() projectId!: number;
  @Output() close = new EventEmitter<void>();


  closeModal(): void {
    this.close.emit();
  }

  nextProject() {
    this.projectId = ((this.projectId) % this.allProjects.length) + 1;
    this.project = this.allProjects[this.projectId - 1];
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
