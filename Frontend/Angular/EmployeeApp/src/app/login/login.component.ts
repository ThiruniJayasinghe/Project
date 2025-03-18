import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Ensure this component is standalone
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;

  // Hardcoded credentials (you can change these)
  private validCredentials = {
    email: 'admin@gmail.com',
    password: 'password123'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    // Validate the credentials
    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      // Redirect to the main page on successful login
      this.router.navigate(['all']);
    } else {
      // Show error if credentials are incorrect
      this.loginError = true;
    }
  }

  logout() {
   
    localStorage.removeItem('userCredentials'); 

    // Redirect the user to the login page
    this.router.navigate(['/']);
  }
}
