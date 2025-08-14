import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from './form-data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './user-form.html',
})
export class UserFormComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  // constructor(private formDataService: FormDataService) {}

  // submitForm() {
  //   if (this.profileForm.valid) {
  //     // Send data to service
  //     this.formDataService.submitFormData(this.profileForm.value);
  //   }
  // }
}
