import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chip } from '../../shared/components/chip/chip';

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
  // hobbies=inject(Chip);
  // fav=this.hobbies.getKeywords();
}
