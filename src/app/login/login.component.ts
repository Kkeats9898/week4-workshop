import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  errorMessage: string = '' 

  users = [
    { email: 'user1@example.com', password: '123'},
    { email: 'user2@example.com', password: 'abc'},
    { email: 'user3@example.com', password: '321'},
  ];

  constructor(private router:Router) {}

  login() {
    const validUser = this.users.find(
      user => user.email === this.email && user.password === this.password
    );

    if (validUser) {
      this.router.navigate(['/account']); // Redirect on success 
    } else {
      this.errorMessage = 'Email or password not correct, try again.'
    }
  }

}
