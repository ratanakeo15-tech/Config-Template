import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, EffectsRootModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';


bootstrapApplication(App, {
  ...appConfig,}).catch((err) => console.error(err));
