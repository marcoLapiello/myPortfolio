import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.translate.use('en');
  }

  public switchLanguage(): void {
    const newLanguage = this.currentLanguageSubject.value === 'en' ? 'de' : 'en';
    this.currentLanguageSubject.next(newLanguage);
    this.translate.use(newLanguage);
  }


  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }
}
