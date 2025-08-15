import { Routes } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form';
import { DisplayDataComponent } from './user-information';

export default [
  {
    path: '',
    component: DisplayDataComponent,
  },
] as Routes;
