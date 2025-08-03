import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  companyName: string;
  companyCode: number;
  employeeName: string;
  employeeCode: number;
  totalLPA: number
  grossPay: number;
  medicareTax: number;
  stateIncomeTax: number;
  federalIncomeTax: number;
  netToGross: number;
  taxAmount: number;
  deleted: boolean;
}

export interface EmployeeResponse {
  employeePayrolls: Employee[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  getEmpPayrolls(page?: number, size?: number): Observable<EmployeeResponse> {
    let url = `${this.baseUrl}/getAllEmpPyrolls`;
    if (page !== undefined && size !== undefined) {
      url += `?page=${page}&size=${size}`;
    }
    return this.http.get<EmployeeResponse>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/createEmployeePayroll`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/auth/deleteEmployeePayroll`;
    return this.http.delete(url, { body: { id } });
  }
}
