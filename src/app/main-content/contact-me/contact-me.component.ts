import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Inject, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translate = inject(TranslationService);
  @ViewChild('formElement') formElement!: ElementRef;
  @ViewChild('contactForm') contactForm!: NgForm;

  formSubmitted = false;
  isChecked = false;
  showPrivacyPolicyError = false;
  formSentConfirmation = false;
  mailTest = true;

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  http = inject(HttpClient);

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  checkUncheck() {
    if (!this.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.isChecked) {
      console.log("Fine");

      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {


            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.isChecked) {
      console.log("Sent in test-mode", this.contactData);
      this.formSentConfirmation = true;
      this.resetFormState(ngForm);
      setTimeout(() => {
        this.formSentConfirmation = false;
      }, 3000);
    } else if (this.isFormEmpty()) {
      this.showGeneralError(ngForm);
    } else {
      this.handleFormErrors();
    }
  }

  isFormEmpty(): boolean {
    return Object.values(this.contactData).every(value => (value || "").trim() === "");
  }

  showGeneralError(ngForm: NgForm): void {
    this.showPrivacyPolicyError = !this.isChecked;
    console.log("Form is empty. Showing general error.");
    setTimeout(() => {
      this.resetFormState(ngForm);
    }, 3000);
  }

  handleFormErrors(): void {
    this.showPrivacyPolicyError = !this.isChecked;
    console.log("Form has validation errors.");
  }

  resetFormState(ngForm: NgForm): void {
    this.formSubmitted = false;
    this.isChecked = false;
    this.showPrivacyPolicyError = false;
    ngForm.resetForm();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.formElement || !this.formElement.nativeElement) {
      return;
    }
    const clickedInside = this.formElement.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.formSubmitted = false;
      this.resetFormErrors(this.contactForm);
    }
  }

  resetFormErrors(ngForm: NgForm): void {
    const controls = ngForm.controls;
    this.showPrivacyPolicyError = false;
    if (controls) {
      Object.keys(controls).forEach((key) => {
        const control = controls[key];
        if (control) {
          control.markAsPristine();
        }
      });
    }
  }

}
