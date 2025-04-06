import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: ['']
  };

  submitted = false;
  formValues: any;

  // Add a new interest field
  addInterest() {
    this.user.interests.push('');
  }

  // Remove an interest field
  removeInterest(index: number) {
    this.user.interests.splice(index, 1);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    // Stop if form is invalid
    if (form.invalid) {
      return;
    }

    this.formValues = { ...this.user };
    console.log('Form submitted successfully!', this.formValues);
  }

  resetForm(form: NgForm) {
    this.submitted = false;
    this.formValues = null;

    this.user = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      interests: ['']
    };

    form.resetForm();
  }

  fillWithSampleData() {
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      interests: ['Programming', 'Reading', 'Gaming']
    };
  }
}
