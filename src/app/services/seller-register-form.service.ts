import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from '../models/form-data-model';

@Injectable({
  providedIn: 'root'
})
export class SellerRegisterFormService {

  private apiUrl = 'http://localhost:8000/api/seller/register'; // Replace with your API URL
    
  constructor(private http: HttpClient) { }

  submitFormData(formData: FormData): Observable<any>{
    console.log('form-data', formData);
    return this.http.post(`${this.apiUrl}`, formData);
  }

  
}
