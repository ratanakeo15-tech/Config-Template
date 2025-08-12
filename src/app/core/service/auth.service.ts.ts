import { computed, inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { EnvironmentService } from "./environment.service.ts";
import { User } from "../models/user.js";
import { delay, Observable, of, tap } from "rxjs";
import { RegisterData } from "../models/register-data.js";
import { LoginCredentials } from "../models/login-credentials.js";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    redirectUrl: string | null = null;
    private readonly router = inject(Router);
    private readonly envService = inject(EnvironmentService);
    private readonly currentUser = signal<User | null>(null);
    private readonly isLoading = signal(false);
    readonly user = this.currentUser.asReadonly();
    readonly isAuthenticated = computed(() => this.currentUser() !== null);
    readonly loading = this.isLoading.asReadonly();
    constructor() {
    this.checkExistingSession();
    // Log environment info on service initialization
    this.envService.logEnvironmentInfo();
  }
  login(credentials: LoginCredentials): Observable<{ success: boolean; error?: string }> {
    this.isLoading.set(true);

    return of(this.performLogin(credentials)).pipe(
      delay(1000),
      tap(() => this.isLoading.set(false))
    );
  }
    logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

    updateProfile(updates: Partial<User>): Observable<{ success: boolean; error?: string }> {
    const user = this.currentUser();
    if (!user) {
      return of({ success: false, error: 'No user logged in' });
    }

    const updatedUser = { ...user, ...updates };
    this.currentUser.set(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

    return of({ success: true }).pipe(delay(500));
  }
  register(data: RegisterData): Observable<{ success: boolean; error?: string }> {
    this.isLoading.set(true);

    // Simulate API call delay
    return of(this.performRegister(data)).pipe(
      delay(1000),
      tap(() => this.isLoading.set(false))
    );
  }
    private performLogin(credentials: LoginCredentials): { success: boolean; error?: string } {
    // Dummy validation - accept any email with password "123456"
    if (credentials.password === '123456') {
      const user: User = {
        id: '1',
        email: credentials.email,
        firstName: 'Pisey',
        lastName: 'Sen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };

      this.currentUser.set(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials. Use password: 123456' };
  }
  private performRegister(data: RegisterData): { success: boolean; error?: string } {
    // Dummy validation
    if (data.email && data.password.length >= 6) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName
      };

      this.currentUser.set(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    }

    return { success: false, error: 'Registration failed. Password must be at least 6 characters.' };
  }
   private checkExistingSession(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User;
        this.currentUser.set(user);
      } catch {
        localStorage.removeItem('user');
      }
    }
  }


}
