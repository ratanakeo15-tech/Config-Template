import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js';
import { ReactiveFormsModule } from '@angular/forms';
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    provideHttpClient() ,
     ReactiveFormsModule
     // ✅ Add this line,
     

  ]
}).catch((err) => console.error(err));
