import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    this.authService.login(this.email, this.password).subscribe({ // Call auth service 
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
    },
    complete: () => {}
  });
  }
}
