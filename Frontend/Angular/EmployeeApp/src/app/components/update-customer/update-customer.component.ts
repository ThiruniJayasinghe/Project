import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm: FormGroup ;
  customerId: number;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    // Initialize form inside constructor
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      location: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.updateCustomerForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });

    // Fetch customer details
    this.customerService.getCustomerById(this.customerId).subscribe((customer) => {
      console.log(customer);
      this.updateCustomerForm.patchValue(customer);
    });
  }

  updateCustomer() {
    if (this.updateCustomerForm.valid) {
      this.customerService.updateCustomer(this.customerId, this.updateCustomerForm.value).subscribe(() => {
        alert('Department updated successfully!');
        this.router.navigate(['all']);
      });
    }
  }
}
