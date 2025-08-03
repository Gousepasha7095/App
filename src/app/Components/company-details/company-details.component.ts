import { Component, OnInit } from '@angular/core';
import { Company, CompanyService } from '../../Services/company.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  standalone: false,
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {

  companyForm: FormGroup;
  errorMessage: string = '';
  isEdit: boolean = false;
  companyEdit: any;

  constructor(private fb: FormBuilder, private companyService: CompanyService, private router: Router) {
    this.companyForm = this.fb.group({
      id: [null],
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      companyCode: ['', [Validators.required, Validators.min(1)]],
      ceo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
    this.companyEdit = this.companyService.getEditCompany();
    if (!this.companyEdit) {
      this.router.navigate(["/companyDetails"]);
    } else {
      this.isEdit = true;
      this.companyForm.patchValue(this.companyEdit);
    }
  }

  onSubmit() {
    if (this.companyForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    const formValue = this.companyForm.getRawValue();
    if (this.isEdit) {
      this.companyService.updateCompany(formValue).subscribe({
        next: () => {
          alert('Company updated successfully!');
          this.router.navigate(['/companyGrid']);
        },
        error: (error) => {
          console.error('Error updating company:', error);
          alert('Failed to update company.');
        }
      });
    } else {
      this.companyService.addCompany(this.companyForm.value).subscribe(
        (response) => {
          alert('Company added successfully!');
          console.log('Company added successfully :::',);
          this.router.navigate(['/companyGrid']);
        },
        (error) => {
          console.error('Error adding company:', error);

          let errorMessage = 'An error occurred while adding the company.';
          if (error.error && typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error && error.error.message) {
            errorMessage = error.error.message;
          }

          alert(errorMessage);
        }
      );
    }
  }



  updateCompany() {
    if (!this.companyForm.valid) {
      return;
    }
    let formObj = this.companyForm.getRawValue();
    console.log("formObj", formObj);
    this.companyService.updateCompany(formObj).subscribe((data) => {
      if (data) {
        alert("Company Data Updated Successfully")
        this.router.navigate(["/companyGrid"]);
      }
    });
  }

  cancel() {
    this.router.navigate(['/companyDetails']);
  }
  back() {
    this.router.navigate(['/dashboard']);
  }
}
