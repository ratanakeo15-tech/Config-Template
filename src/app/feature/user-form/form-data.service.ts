import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private formDataSource = new BehaviorSubject<any>(null);
  formData$ = this.formDataSource.asObservable();

  submitFormData(data: any) {
    this.formDataSource.next(data);
  }
}
