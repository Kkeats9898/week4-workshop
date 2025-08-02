import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root', // HTML tag for adding this component to a page
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html', // HTML to be displayed in component
  styleUrl: './app.component.css' // CSS to style component
})
export class AppComponent {
  title = 'week4tut';
}
