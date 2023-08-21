// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
    private baseUrl = 'http://localhost:3000/'
    private userUrl = this.baseUrl+'users'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to get all users from the database
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  

  // Method to add a new user to the database
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  // Method to update an existing user in the database
  updateUser(user: User): Observable<User> {
    const updateUserUrl = `${this.userUrl}/${user.id}`;
    return this.http.put<User>(updateUserUrl, user);
  }


  // Other methods for update and delete operations (not shown in this example)
}
