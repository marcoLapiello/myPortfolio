import { Component, inject } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { ProjectsService } from './projects.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule, MaterialModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: any[] = [];
  translate = inject(TranslationService);

  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialog
  ) {
    this.projects = this.projectsService.getProjects();
  }

  openModal(project: {}, projectId: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '90vw',
      maxWidth: '1440px',
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      autoFocus: false,
      data: { projectId: projectId + 1 }
    });

    dialogRef.afterClosed().subscribe(() => {
      document.body.style.overflow = '';
    });

    document.body.style.overflow = 'hidden';
  }
}
