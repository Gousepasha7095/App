import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { CompanygridComponent } from './Components/companygrid/companygrid.component';
import { CompanyDetailsComponent } from './Components/company-details/company-details.component';
import { DemoComponent } from './Components/demo/demo.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AngularComponent } from './Components/angular/angular.component';
import { CommonModule } from '@angular/common';
import { DemosComponent } from './Components/demos/demos.component';
import { UploadComponent } from './Components/upload/upload.component';
import { UploadGridComponent } from './Components/upload-grid/upload-grid.component';
import { AuthService } from './Services/auth.service';
import { AuthInterceptorService } from './Services/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    CompanygridComponent,
    CompanyDetailsComponent,
    DemoComponent,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AngularComponent,
    DemosComponent,
    UploadComponent,
    UploadGridComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
