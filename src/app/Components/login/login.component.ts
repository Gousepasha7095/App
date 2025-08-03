import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../Services/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          if (response.token) {
            //
            console.log("====response.put.token=====>", response.token, "=========>", response["token"]);
            //
            localStorage.setItem('token', response.token);
            var token = localStorage.getItem('token');
            console.log("====response.get.token=====>", token);
            this.router.navigate(['/dashboard']);
          } else {
            this.message = response.message || 'Login failed!';
          }
        },
        (error) => {
          this.message = 'Invalid username or password!';
        }
      );
    }
  }
}