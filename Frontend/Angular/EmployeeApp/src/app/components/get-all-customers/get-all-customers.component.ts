import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-get-all-customers',
  standalone: true, // Ensure this component is standalone
  imports: [CommonModule, ReactiveFormsModule,RouterModule], // Import necessary modules
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  
  customers: any[] = [];
  router: any;
  navigationService: any;
  

  constructor(private customerService: CustomerService) {}

  
  ngOnInit() {
    this.getAllCustomers();
  }

  //  Fetch departments from API
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      console.log(res);
      this.customers = res;
    });
  }

  // ✅ Delete a departments
  deleteCustomer(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.customerService.deleteCustomer(id).subscribe((res) => {
        alert('Department deleted successfully!');
        console.log(res);
        this.getAllCustomers(); // Refresh the list
      });
    }
  }

  
}
