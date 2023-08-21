
// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: any; // Replace 'any' with a proper user model interface
  private username : string = '';

 // Replace this fake implementation with actual authentication logic using API or backend.
 login(username: string, password: string): Promise<any> {
  this.username = username;
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
      resolve({ username: 'admin' });
    } else {
      reject('Invalid credentials');
    }
  });
}
  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  register(user: any): Promise<boolean> {
    // Replace this with actual API call to the JSON API to register the user
    // For fakeservice, you can simply push the new user to your JSON array of users.
    return new Promise<boolean>((resolve) => {
      resolve(true);
    });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  getUserName(): any {
    return this.username  }
}
