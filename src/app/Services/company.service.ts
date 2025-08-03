import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// export interface Company {
//   id?: number;
//   companyName: string;
//   companyCode: number;
//   ceo: string;
// }

// export interface CompanyResponse {
//   companies: Company[];
//   totalCount: number;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class CompanyService {
//   private apiUrl = 'http://localhost:8080/api/v1/auth/getAllCompanies';

//   constructor(private http: HttpClient) {}

//   getCompanies(page?: number, size?: number): Observable<CompanyResponse> {
//     let url = this.apiUrl;
//     if (page !== undefined && size !== undefined) {
//       url += `?page=${page}&size=${size}`;
//     }
//     return this.http.get<CompanyResponse>(url);
//   }
//   addCompany(company: Company): Observable<Company> {
//     const url = 'http://localhost:8080/api/v1/auth/addCompany';
//     return this.http.post<Company>(url, company);
//   }
// }
export interface Company {

  id: number;
  companyName: string;
  companyCode: number;
  ceo: string;
  deleted: boolean;
}

export interface CompanyResponse {
  companies: Company[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  private companyEdit: any;

  setEditCompany(data: any) {
    this.companyEdit = data;
  }

  getEditCompany() {
    return this.companyEdit;
  }
  private baseUrl = 'http://localhost:8080/api/v1/api';

  //======================token============
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });


  constructor(private http: HttpClient) { }

  getCompanies(page?: number, size?: number): Observable<CompanyResponse> {
    let url = `${this.baseUrl}/getAllCompanies`;
    if (page !== undefined && size !== undefined) {
      url += `?page=${page}&size=${size}`;
    }

    // return this.http.get<CompanyResponse>(url);
    // console.log("====get url====>", url, "====token====>", this.token, "====headers====>", this.headers);
    return this.http.get<CompanyResponse>(url
      // , { headers: this.headers }
    );
  }

  addCompany(company: Company): Observable<Company> {
    console.log('Company added token::', this.token, "company::data::", company, "baseUrl::", this.baseUrl, "/addCompany");

    return this.http.post<Company>(`${this.baseUrl}/addCompany`, company);
  }

  updateCompany(company: Company): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateCompany`, company);
  }

  deleteCompany(id: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/api/deleteCompany`;
    return this.http.delete(url, { body: { id } });
  }

  getAllComapnyNames(): Observable<any> {
    return this.http.get<string>(`${this.baseUrl}/fetchCompanyNames`)
  }
}