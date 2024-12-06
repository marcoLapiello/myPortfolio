import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  isChecked = false;

  showPrivacyPolicyError = false;

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

  checkUncheck(){
    if (!this.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  mailTest = true;

  onSubmit(ngForm: NgForm) {
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
      console.log("sent" , this.contactData);
      this.isChecked = false;
      this.showPrivacyPolicyError = false;
      ngForm.resetForm();
    } else {
      this.showPrivacyPolicyError = true;
      console.log("Error");
    }
  }

}
