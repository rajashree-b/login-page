import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  loginForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email,gmailValidator]), 
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert("Please enter a valid email and a password with at least 8 characters.");
      return;
    }
    alert('Login successful');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

export function gmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (email && !email.endsWith('@gmail.com')) {
    return { gmailDomain: true }; 
  }
  return null; 
}
