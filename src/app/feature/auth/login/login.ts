import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service.ts';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-login',
  imports: [
    MatIcon,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  protected readonly hidePassword = signal(true);
  protected readonly error = signal< string | null >(null);
  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  protected togglePasswordVisibility(): void {
    this.hidePassword.update((hidden) => !hidden);
  }
  protected onSubmit(): void {
    if (this.loginForm.valid) {
      this.error.set(null);
      const { email, password } = this.loginForm.value;

      this.authService.login({ email: email!, password: password! }).subscribe({
        next: (result) => {
          if (result.success) {
            this.router.navigateByUrl(this.authService.redirectUrl || '/dashboard');
        this.authService.redirectUrl = null;
          } else {
            this.error.set(result.error || 'Login failed');
          }
        },
        error: () => {
          this.error.set('An unexpected error occurred');
        },
      });
    }
  }
}
