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
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('./feature/profile/profile.route').then(
      //       (m) => m.default
      //     ),
      //   title: 'Register',
      // },
    ],
  },

  {
    path: 'home',
    //loadChildren: () =>
      // import('./feature/home/home.route').then((m) => m.default),
    component: Home,

    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./feature/profile/profile.route').then((m) => m.default),
        component: Profile,
        title: 'Profile',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
