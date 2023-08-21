import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit(): void {
    this.authService.login(this.username, this.password)
      .then((user) => {
        console.log('Login successful:', user);
        this.router.navigateByUrl('/home'); // Navigate to the home page after successful login
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }
}
