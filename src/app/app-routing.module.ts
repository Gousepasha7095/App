import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CompanygridComponent } from './Components/companygrid/companygrid.component';
import { CompanyDetailsComponent } from './Components/company-details/company-details.component';
import { DemoComponent } from './Components/demo/demo.component';
import { ChildComponent } from './Components/child/child.component';
import { ParentComponent } from './Components/parent/parent.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DemosComponent } from './Components/demos/demos.component';
import { UploadComponent } from './Components/upload/upload.component';
import { UploadGridComponent } from './Components/upload-grid/upload-grid.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companyGrid', component: CompanygridComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'employeeDeatils', component: EmployeeDetailsComponent },
  { path: 'employeeGrid', component: EmployeeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'uploadGrid', component: UploadGridComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
