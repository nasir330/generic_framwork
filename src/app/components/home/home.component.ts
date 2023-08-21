import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    
  ];  
  username: string | null = null;

  constructor(private authService: AuthService) {
    // Retrieve the username from the authentication service
    this.username = this.authService.getCurrentUser();
    console.log( " User Name : ", this.username);
  }
}
