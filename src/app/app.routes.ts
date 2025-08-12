import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth.guard';
import { Login } from './feature/auth/login/login';
import { Home } from './feature/home/home';
import { Profile } from './feature/profile/profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./shared/layout/auth-layout/auth-layout').then(
        (c) => c.AuthLayout
      ),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./feature/auth/login/login.route').then((m) => m.default),
        title: 'Login',
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./feature/auth/register/register.route').then(
            (m) => m.default
          ),
        title: 'Register',
      },
    ],
  },

  {
    path: '',
    loadChildren: () =>
      import('./feature/home/home.route').then((m) => m.default),
  },

  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/layout/main-layout/main-layout').then(
        (c) => c.MainLayout
      ),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/dashboard/dashboard.route').then((m) => m.default),
        title: 'Dashboard',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./feature/profile/profile.route').then((m) => m.default),

        title: 'Profile',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
