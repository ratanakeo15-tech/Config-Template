import { Component, inject, Injectable, NgModule, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from './form-data.service';
import { Router, RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Chip } from '../../shared/components/chip/chip';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    Chip
],
  templateUrl: './user-form.html',
})
export class UserFormComponent implements OnInit {
  hobbies=inject(Chip);
  private formdataValue = inject(FormDataService);
  isDisabled = true;
  // private router = inject(Router);
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]+$/), // only letters and spaces
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    kind: new FormControl(''),
    color: new FormControl(''),
    message: new FormControl(''),
    // keywords: new FormControl<string[]>([]),
  });
  animals = new FormGroup({
    cat: new FormControl(false),
    dog: new FormControl(false),
    bird: new FormControl(false),
  });

  constructor(
    public formDataService: FormDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit');
    // if(this.profileForm.invalid){
    //   return ;
    // }
    this.formdataValue.name.set(this.profileForm.value.name || '');
    this.formdataValue.email.set(this.profileForm.value.email || '');
    this.formdataValue.phoneNumber.set(
      this.profileForm.value.phoneNumber || ''
    );

    this.formdataValue.date.set(this.profileForm.value.date || '');
    this.formdataValue.time.set(this.profileForm.value.time || '');
    this.formdataValue.kind.set(this.profileForm.value.kind || '');
    this.formdataValue.color.set(this.profileForm.value.color || '');
    this.formdataValue.message.set(this.profileForm.value.message || '');
    //  this.formdataValue.fav=this.profileForm.value.keywords || [];

    const value = this.animals.value as {
      [key in 'cat' | 'dog' | 'bird']: boolean;
    };

    const selected = (Object.keys(value) as (keyof typeof value)[]).filter(
      (key) => value[key]
    );

    console.log('Selected animals:', selected);
    this.formdataValue.animal.set(selected.join(','));
    //save in localstorage

    const formDataObj = {
      name: this.formdataValue.name(),
      email: this.formdataValue.email(),
      phoneNumber: this.formdataValue.phoneNumber(),
      date: this.formdataValue.date(),
      time: this.formdataValue.time(),
      kind: this.formdataValue.kind(),
      color: this.formdataValue.color(),
      message: this.formdataValue.message(),
      animal: this.formdataValue.animal(),
      // hobbies:  this.formdataValue.fav
    };
    // converts your object to a string
    localStorage.setItem('userFormData', JSON.stringify(formDataObj));
    //  get it back and turn it into an object again
    const savedData = localStorage.getItem('userFormData');
    if (savedData) {
      // turns the string back into an object
      const parsedData = JSON.parse(savedData);
      console.log(parsedData.name, parsedData.email);
    }
    this.router.navigateByUrl('/user');
    this.profileForm.markAllAsTouched();
  }
  clearData() {
    //reset data back
    this.profileForm.reset();
  }
}
