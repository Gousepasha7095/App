import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  totalEmployees: number = 0;
  page: number = 0;
  pageSize: number = 5;


  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEmpList();
  }

  fetchEmpList(): void {
    this.empService.getEmpPayrolls(this.page, this.pageSize).subscribe((response) => {

      console.log("API RESPONSE employees===", response.employeePayrolls)
      console.log("API RESPONSE totalCount===", response.totalCount)

      const allEmployees = response.employeePayrolls;
      this.employees = allEmployees.filter(emp => !emp.deleted)
      this.totalEmployees = response.totalCount
      // const filteredEmployees = response.employeePayrolls.filter(emp => !emp.deleted);
      // this.employees = filteredEmployees;
      // this.totalEmployees = filteredEmployees.length;
      // if (this.page > 0 && this.employees.length === 0) {
      //   this.page = this.page - 1;
      //   this.fetchEmpList(); // Recall after adjusting page
      // }
    },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe((response) => {
      console.log("Employee deleted successfully");
      alert("Employee Deleted")
      this.page = 0;
      this.fetchEmpList();
    },
      (error) => {
        console.error("Error deleting Employee", error)
      }
    );
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.getTotalPages()) {
      this.page = newPage;
      this.fetchEmpList();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalEmployees / this.pageSize);
  }
  navigateToAddEmployeePayroll() {
    this.router.navigate(['/employeeDeatils']);

  }
  referesh(): void {
    this.fetchEmpList();
  }
  back() {
    this.router.navigate(['/dashboard']);
  }
}
// jfcmdosfckdsk,mcks