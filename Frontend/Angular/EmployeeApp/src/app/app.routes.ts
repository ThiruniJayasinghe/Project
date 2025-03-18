import { Routes } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { RouterModule } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'all', component: GetAllCustomersComponent },  // Default page
  { path: 'customers', component: PostCustomerComponent },
  { path: 'update-customer', component: UpdateCustomerComponent },
  { path: 'customer/:id', component: UpdateCustomerComponent },
  { path: 'employee-data', component: EmployeeDataComponent },
  { path: '', component: LoginComponent },
];
