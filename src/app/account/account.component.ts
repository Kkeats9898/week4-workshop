import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  userForm = { 
    name: "",
    email: "" 
  };

  ngOnInit(): void {
    // Get stored user data on init
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const userObj = JSON.parse(storedUser); // Turn string to object
      const storedName = userObj.name
      const storedEmail = userObj.email

      this.userForm = {
        name: storedName || "",
        email: storedEmail || ""
      }
  }
}

  // Update user details 
  saveUser(): void {
    if (this.userForm) {
      localStorage.setItem('name', this.userForm.name);
      localStorage.setItem('email', this.userForm.email);
    }
  }

}
