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
  }  openModal(project: {}, projectId: number): void {
    // Get current window width for responsive behavior
    const isMobile = window.innerWidth <= 768;
    
    // Set body overflow to hidden before opening dialog to prevent page jumping
    document.body.style.overflow = 'hidden';
      const dialogRef = this.dialog.open(ModalComponent, {
      width: isMobile ? '100%' : '90vw',
      height: isMobile ? '100dvh' : 'auto',
      maxWidth: isMobile ? '100%' : '1440px',
      panelClass: ['custom-dialog-container', isMobile ? 'mobile-dialog' : ''],
      hasBackdrop: true,
      backdropClass: 'default-backdrop', 
      autoFocus: false,
      disableClose: isMobile, // On mobile, prefer using the close button
      maxHeight: isMobile ? '100dvh' : '90vh',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '200ms',
      data: { projectId: projectId + 1 }
    });

    // Reset body overflow when dialog closes
    dialogRef.afterClosed().subscribe(() => {
      document.body.style.overflow = '';
    });
  }
}
