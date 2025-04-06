import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  // onSubmit() {
  //   console.log('Form Submitted:', {
  //     name: this.name.value,
  //     email: this.email.value,
  //     phone: this.phone.value,
  //     password: this.password.value
  //   });
  // }

  async onSubmit() {
    await this.userService.submitForm({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      password: this.password.value,
    });
  }

  constructor(private userService: UserService) {

  }
}
