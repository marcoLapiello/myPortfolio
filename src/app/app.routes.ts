import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ImprintComponent } from './imprint/imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'legalNotice', component: LegalNoticeComponent},
    { path: 'imprint', component: ImprintComponent },
];
