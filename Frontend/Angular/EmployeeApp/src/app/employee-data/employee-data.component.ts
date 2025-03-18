import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, AfterViewInit, inject, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
declare var bootstrap: any;
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit, AfterViewInit {

  @ViewChild('employeeModal') employeeModal!: ElementRef;
  private modalInstance: any;

  employeeList: any[] = [];
  http = inject(HttpClient);

  // Object to hold form data
  employeeForm: {
    employeeId?: number | null;  
    name: string;
    email: string;
    phone: string;
    salary: string;
    departmentId: number | null;
  } = {
    employeeId: null,
    name: '',
    email: '',
    phone: '',
    salary: '',
    departmentId: null
  };

  // Modal titles and button text
  modalTitle = 'Add Employee';
  modalButtonText = 'Save';

  ngOnInit(): void {
    this.getAllEmployee();
  }

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.employeeModal.nativeElement);
  }

  openModel(employee?: any) {
    if (employee) {
      this.modalTitle = 'Edit Employee';
      this.modalButtonText = 'Update';
      this.employeeForm = { ...employee }; // Pre-fill form with employee data
    } else {
      this.modalTitle = 'Add Employee';
      this.modalButtonText = 'Save';
      this.employeeForm = { employeeId: null, name: '', email: '', phone: '', salary: '', departmentId: null };
    }
    this.modalInstance.show();
  }

  closeModel() {
    this.modalInstance.hide();
  }

  getAllEmployee() {
    this.http.get<any>("https://localhost:7287/api/Employees").subscribe({
      next: (res) => {
        console.log(res);
        this.employeeList = res;
      },
      error: (err) => {
        console.error("Error fetching employees:", err);
      }
    });
  }

  // Add Employee Method
  addEmployee() {
    const formData = { ...this.employeeForm };
    delete formData.employeeId;  // Remove employeeId for new employee creation
    
    console.log("Form Data Being Sent to API:", formData);  // Debugging output
  
    this.http.post<any>("https://localhost:7287/api/Employees", formData).subscribe({
      next: (res) => {
        console.log("Employee added:", res);
        this.getAllEmployee(); // Reload employee list
        this.closeModel(); // Close modal/form
      },
      error: (err) => {
        console.error("Error adding employee:", err);
      }
    });
  }
  
  
  
  

  // Update Employee Method
  updateEmployee() {
    console.log("Form Data Before Sending:", this.employeeForm); // Debugging output
    this.http.put<any>(`https://localhost:7287/api/Employees/${this.employeeForm.employeeId}`, this.employeeForm).subscribe({
      next: (res) => {
        console.log('Employee updated:', res);
        this.getAllEmployee();
        this.closeModel();
      },
      error: (err) => {
        console.error('Error updating employee:', err);
      }
    });
  }

  // Save Employee: Decides whether to add or update
  saveEmployee() {
    if (this.employeeForm.employeeId) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  deleteEmployee(employeeId: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.http.delete<any>(`https://localhost:7287/api/Employees/${employeeId}`).subscribe({
        next: (res) => {
          console.log('Employee deleted:', res);
          this.getAllEmployee();  // Refresh the list
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
        }
      });
    }
  }
}
