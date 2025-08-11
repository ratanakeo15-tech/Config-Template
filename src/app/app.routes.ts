import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth.guard';import { Login } from './feature/auth/login/login';
export const routes: Routes = [
  // Redirect root to dashboard
  {
    path: '',
    component: Login
  },

  
];
