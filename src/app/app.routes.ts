import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth.guard';
import { Login } from './feature/auth/login/login';

export const routes: Routes = [
  {
    path:'',
    component:Login
  }
  // Redirect root to dashboard
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },

  // Auth routes (accessible when not authenticated)
  // {
  //   path: 'auth',
  //   canActivate: [guestGuard],
  //   loadComponent: () => import('./shared/layout/auth-layout/auth-layout').then(c => c.AuthLayout),
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'login',
  //       loadChildren: () => import('./feature/auth/login/login.route').then(m => m.default),
  //       title: 'Login'
  //     },
  //     {
  //       path: 'register',
  //       loadChildren: () => import('./feature/auth/register/register.route').then(m => m.default),
  //       title: 'Register'
  //     }
  //   ]
  // },

  // Protected routes (accessible when authenticated)
  // {
  //   path: '',
  //   canActivate: [authGuard],
  //   loadComponent: () => import('./shared/layout/main-layout/main-layout').then(c => c.MainLayout),
  //   children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./features/dashboard/dashboard.route').then(m => m.routes),
      //   title: 'Dashboard'
      // },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('./features/profile/profile.route').then(m => m.routes),
      //   title: 'Profile'
      // },
      // {
      //   path: 'products',
      //   loadChildren: () => import('./features/products/product.routes').then(m => m.routes),
      //   title: 'Products'
      // }
  //   ]
  // },

  // Wildcard route - 404 page
  // {
  //   path: '**',
  //   redirectTo: '/dashboard'
  // }
];