import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private http: HttpClient) {}

  login() {
    const validUser = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/api/auth', validUser).subscribe({
    next: (response) => {
      if (response.user.valid) {
        console.log('Login successful', response);
        localStorage.setItem("user", JSON.stringify(response.user)) // Store user info (password not included)
        this.router.navigate(['/account']);
      } else {
        this.errorMessage = response.message || 'Email or password not correct.';
      }
    },
    error: (error) => {
      console.error('Login failed', error);
      this.errorMessage = error.error?.message || 'Server error occurred.';
    }
  });
  }
}
