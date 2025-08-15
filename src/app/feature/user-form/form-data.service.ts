import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  name = signal('');
  email = signal('');
  phoneNumber = signal('');
  date = signal('');
  time = signal('');
  kind = signal('');
  color = signal('');
  animal = signal('');
  message=signal('');
}
