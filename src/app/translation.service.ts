import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // 1. Creiamo un BehaviorSubject con lingua iniziale 'english'
  private currentLanguageSubject = new BehaviorSubject<string>('en');

  // 2. Esponiamo l'Observable (read-only) per i componenti
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.translate.use('en');
  }

  public switchLanguage(): void {
    // 4. Determiniamo la nuova lingua
    const newLanguage = this.currentLanguageSubject.value === 'en' ? 'de' : 'en';
    // 5. Aggiorniamo il valore del BehaviorSubject
    this.currentLanguageSubject.next(newLanguage);
    // 6. Passiamo la lingua a ngx-translate ('en' o 'de')
    this.translate.use(newLanguage);
  }

  // Metodo per ottenere la lingua corrente
  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }
}
