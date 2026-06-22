import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';
  dummyCredentials: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    // Get dummy credentials for display
    this.dummyCredentials = this.authService.getDummyCredentials();
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loginError = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    const isAuthenticated = this.authService.login(email, password);

    if (isAuthenticated) {
      // Navigate to dashboard after successful login
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Invalid email or password. Use demo@quickdesk.com / Demo@123';
      this.loginForm.reset();
      this.submitted = false;
    }
  }

  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }

  fillDemoCredentials() {
    this.loginForm.patchValue({
      email: this.dummyCredentials.email,
      password: this.dummyCredentials.password
    });
  }
}
