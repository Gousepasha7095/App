import { Component, OnInit } from '@angular/core';
import { Company, CompanyService } from '../../Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companygrid',
  standalone: false,
  templateUrl: './companygrid.component.html',
  styleUrl: './companygrid.component.css'
})
export class CompanygridComponent implements OnInit {
  companies: Company[] = [];
  totalCompanies: number = 0;
  page: number = 0;
  pageSize: number = 5;


  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCompanies();
  }


  fetchCompanies(): void {
    this.companyService.getCompanies(this.page, this.pageSize).subscribe(
      (response) => {
        console.log('API response:', response);
        const allCompanies = response.companies;
        this.companies = allCompanies.filter(company => !company.deleted)
        this.totalCompanies = response.totalCount;
      },
      (error) => {
        console.error('Error fetching companies', error);
      }
    );
  }
  updateCompany(company: Company): void {
    const updatedCeo = prompt('Enter new CEO Name:', company.ceo);
    if (updatedCeo !== null) {
      company.ceo = updatedCeo;
      this.companyService.updateCompany(company).subscribe(response => {
        alert(response);
        this.fetchCompanies();
      });
    }
  }
  referesh(): void {
    this.fetchCompanies();
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(
      response => {
        this.fetchCompanies();
        console.log("Company deleted successfully");
        this.router.navigate(['/companyGrid']);


      },
      error => console.error("Error deleting company", error)
    );
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.getTotalPages()) {
      this.page = newPage;
      this.fetchCompanies();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalCompanies / this.pageSize);
  }

  navigateToAddCompany() {
    this.router.navigate(['/companyDetails']);
  }
  editCompany(data: any) {
    this.companyService.setEditCompany(data);
    this.router.navigate(["/companyDetails"]);

  }
  back() {
    this.router.navigate(['/dashboard']);
  }
}
