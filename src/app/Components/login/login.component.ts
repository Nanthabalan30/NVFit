import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserManagementService } from '../../Services/userManagement/user-management.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FloatLabelModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin: boolean = true;
  hasContent: boolean = true;
  showPassword: boolean = false;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, public UserMngSer: UserManagementService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      countryCode: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Login Data:', this.loginForm.value);
    } else {
      console.log('Register Data:', this.registerForm.value);
      this.UserMngSer.CreateUser(this.registerForm.value).subscribe({
        next: (data: any) => {
          console.log('User created successfully', data);
        },
        error: (error: any) => {
          console.error('Error creating user', error);
        },
        complete: () => {
          console.log('User creation request completed.');
        }
      });
    }
  }
}