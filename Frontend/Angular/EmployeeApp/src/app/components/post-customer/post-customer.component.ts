import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-customer',
  standalone: true, // Ensure this component is standalone
  imports: [CommonModule, ReactiveFormsModule], // Import necessary modules
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css'] // Fix property name from `styleUrl` to `styleUrls`
})
export class PostCustomerComponent {
  postCustomerForm: FormGroup; // Define the form
  private router = inject(Router);

  constructor(private customerservice: CustomerService, 
    private fb: FormBuilder,) {
    // Initialize form inside constructor
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      location: [null, [Validators.required]],
    });
  }

  postCustomer() {
    if (this.postCustomerForm.valid) {
      console.log(this.postCustomerForm.value);
      this.customerservice.postCustomer(this.postCustomerForm.value).subscribe(
        (res) => {
          console.log('Department saved successfully:', res);
          alert('Department saved successfully!');
          this.postCustomerForm.reset(); 
          this.router.navigateByUrl("all");
        },
        (error) => {
          console.error('Error saving department:', error);
          alert('Failed to save department. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }

  }
}
