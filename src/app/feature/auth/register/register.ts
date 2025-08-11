import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service.ts';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  imports: [ CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly hidePassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly error = signal<string | null>(null);

  protected readonly registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  protected togglePasswordVisibility(): void {
    this.hidePassword.update(hidden => !hidden);
  }

  protected toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword.update(hidden => !hidden);
  }

  protected onSubmit(): void {
    if (this.registerForm.valid) {
      this.error.set(null);
      const { firstName, lastName, email, password } = this.registerForm.value;

      this.authService.register({
        firstName: firstName!,
        lastName: lastName!,
        email: email!,
        password: password!
      }).subscribe({
        next: (result) => {
          if (result.success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.error.set(result.error || 'Registration failed');
          }
        },
        error: () => {
          this.error.set('An unexpected error occurred');
        }
      });
    }
  }

  private passwordMatchValidator(form: any) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
