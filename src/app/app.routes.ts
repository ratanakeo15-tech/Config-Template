import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth.guard';
import { Login } from './feature/auth/login/login';
import { Home } from './feature/home/home';
import { Profile } from './feature/profile/profile';
import { Function3 } from './shared/components/function3/function3';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    // loadChildren: () => import('./feature/home/home.route').then(c => c.home),
    children: [
      {
        path: 'showcaseBoard',
        loadChildren: () =>
          import('./shared/components/showcase-card/showCase.route').then(
            (c) => c.default
          ),
      },
      {
        path: 'function1',
        loadChildren: () =>
          import('./shared/components/function1/function1.route').then(
            (c) => c.default
          ),
      },
      {
        path: 'function2',
        loadChildren: () =>
          import('./shared/components/function2/function2.route').then(
            (c) => c.default
          ),
      },
      {
        path: 'function3',
        loadChildren: () =>
          import('./shared/components/function3/function3.route').then(
            (c) => c.default
          ),
      },
    ],
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
    path:'check',
    loadChildren:()=>import('./shared/components/check/check.route').then(m=>m.default),
  },
  {
    path:'products',
    loadChildren:()=>import('./feature/product-page/product.route').then(m=>m.default)
  },
    {
    path:'product/:id',
    loadChildren:()=>import('./feature/product-page/product.route').then(m=>m.default)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
