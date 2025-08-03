import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';
import { CompanyService } from '../../Services/company.service';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})

export class EmployeeDetailsComponent implements OnInit {
  inputName: string = '';
  employeeForm: FormGroup;
  errorMessage: string = '';
  companyData: any;
  selectedCompany: any;
  selectedCode: any;

  constructor(private fb: FormBuilder, private empService: EmployeeService,
    private companyService: CompanyService,
    private router: Router) {


    this.employeeForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      companyCode: ['',],
      employeeName: ['', [Validators.required, Validators.minLength(3)]],
      employeeCode: [''],
      totalLPA: [''],
      medicareTax: [''],
      stateIncomeTax: [''],
      federalIncomeTax: [''],
    });

    this.employeeForm.get('companyName')?.valueChanges.subscribe(value => {
      const selected = this.companyData.find((item: { companyName: any; }) => item.companyName === value);
      this.employeeForm.get('companyCode')?.setValue(selected?.companyCode || '');
    })
  }
  ngOnInit(): void {
    // this.fetchCompanyNames();
    this.fetchCompany();
  }


  fetchCompany(): void {
    this.companyService.getCompanies().subscribe(response => {
      this.companyData = response.companies;
      console.log("++++", this.companyData);
    })
  }


  onSubmit() {
    if (this.employeeForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }
    const formValue = { ...this.employeeForm.value };
    if (formValue.totalLPA) {
      formValue.totalLPA = parseFloat(formValue.totalLPA) * 100000;
    }
    this.empService.addEmployee(formValue).subscribe(
      (response) => {
        alert('Employee added successfully!');
        this.router.navigate(['/employeeGrid']);
      },
      (error) => {
        console.error('Error adding employee:', error);

        let errorMessage = 'An error occurred while adding the employee.';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error;
        } else if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }

        alert(errorMessage);
      }
    );
  }


  cancel() {
    this.router.navigate(['/companyDetails']);
  }
  back() {
    this.router.navigate(['/dashboard']);
  }

}
