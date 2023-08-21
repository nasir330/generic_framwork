// src/app/fake-api.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private users: any[] = []; // Replace 'any' with a proper user model interface

  constructor() {
    // Add some fake users for testing
    this.users.push({ id: 1, username: 'testuser', password: 'testpassword' });
  }

  login(username: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const user = this.users.find((u) => u.username === username && u.password === password);
      if (user) {
        resolve(user);
      } else {
        reject('Invalid credentials');
      }
    });
  }

  register(user: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      user.id = this.users.length + 1;
      this.users.push(user);
      resolve(true);
    });
  }

  getUserById(id: number): Promise<any> {
    return new Promise<any>((resolve) => {
      const user = this.users.find((u) => u.id === id);
      resolve(user);
    });
  }
}
