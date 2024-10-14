import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Thiago';
  title = 'curso-angular';
  userData = {
    email: 'user@email.com',
    role: 'User',

  };
  year = 2024;
}
