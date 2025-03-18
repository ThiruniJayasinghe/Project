import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


const BASIC_URL = "http://localhost:8080/api"; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  // Fetch all departments
  getAllCustomers(): Observable<any> {
    return this.http.get(`${BASIC_URL}/departments`);
  }

  // Fetch a single department by ID
  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${BASIC_URL}/department/${id}`);
  }

  // Create a new department
  postCustomer(customer: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/department`, customer);
  }

  // Update an existing department
  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put(`${BASIC_URL}/${id}`, customer);
  }

  // Delete a department
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${BASIC_URL}/${id}`);
  }
}
