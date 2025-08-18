import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormDataService } from '../user-form/form-data.service';
import {
  FormControl,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-display-data',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-information.html',
})
export class DisplayDataComponent {
  data = inject(FormDataService);
  profileForm: FormGroup;

  // get name() {
  //   return this.data.name();
  // }
  // get email() {
  //   return this.data.email();
  // }
  // get date() {
  //   return this.data.date();
  // }
  // get time() {
  //   return this.data.time();
  // }
  // get PhoneNumber() {
  //   return this.data.phoneNumber;
  // }
  // get kind() {
  //   return this.data.kind();
  // }
  // get color() {
  //   return this.data.color();
  // }
  // get pet() {
  //   return this.data.animal();
  // }
  // get text() {
  //   return this.data.message();
  // }
  //clear data
  clearData() {
    if (this.profileForm.invalid) {
      alert('⚠️ No data to cancel.');
      return;
    }
    // remove only the form data from local storage
    this.profileForm.reset();
    // also clear values from your FormDataService signals
    this.data.name.set('');
    this.data.email.set('');
    this.data.phoneNumber.set('');
    this.data.date.set('');
    this.data.time.set('');
    this.data.kind.set('');
    this.data.color.set('');
    this.data.message.set('');
    this.data.hobbies.set([]);
    localStorage.removeItem('userFormData');
  }

  // profileForm = new FormGroup({
  //   name: new FormControl(this.data.name),
  //   email: new FormControl(this.data.email),
  // });
  constructor(private fb: FormBuilder) {
    // get data from local storage and then parse it to json object
    const storedData = JSON.parse(localStorage.getItem('userFormData') || '{}');

    // 2️⃣ Update signals if data exists
    if (storedData.name) this.data.name.set(storedData.name);
    if (storedData.email) this.data.email.set(storedData.email);
    if (storedData.phoneNumber)
      this.data.phoneNumber.set(storedData.phoneNumber);
    if (storedData.date) this.data.date.set(storedData.date);
    if (storedData.time) this.data.time.set(storedData.time);
    if (storedData.kind) this.data.kind.set(storedData.kind);
    if (storedData.color) this.data.color.set(storedData.color);
    if (storedData.animal) this.data.animal.set(storedData.animal);
    if (storedData.message) this.data.message.set(storedData.message);
    if (storedData.hobbies) this.data.hobbies.set(storedData.hobbies);
    this.profileForm = this.fb.group({
      name: [this.data.name(), Validators.required],
      email: [this.data.email(), [Validators.required, Validators.email]],
      phoneNumber: [this.data.phoneNumber()],
      date: [this.data.date()],
      time: [this.data.time()],
      kind: [this.data.kind()],
      color: [this.data.color()],
      animal: [this.data.animal()],
      message: [this.data.message()],
       hobbies: [this.data.fav],
    });
    const existingData = JSON.parse(
      localStorage.getItem('userFormData') || '{}'
    );

    console.log('existingData', existingData);
    this.profileForm.valueChanges.subscribe((val) => {
      if (existingData !== '' && existingData !== null) {
        //display data to screen
        this.data.name.set(existingData.name);
        // this.name=existingData.name;
        this.data.email.set(existingData.email);
        this.data.phoneNumber.set(existingData.phoneNumber);
        this.data.date.set(existingData.date);
        this.data.time.set(existingData.time);
        this.data.kind.set(existingData.kind);
        this.data.color.set(existingData.color);
        this.data.message.set(existingData.message);
        this.data.animal.set(existingData.animal);
        this.data.hobbies=existingData.hobbies;
      } else {
        this.data;
      }
    });

    console.log('e', existingData);
  }
  //update data
  updateData() {
    if (this.profileForm.invalid) {
      alert('⚠️ Please complete all required fields before submitting.');
      return;
    }
    const updatedData = this.profileForm.value;
    this.data.name.set(updatedData.name);
    this.data.email.set(updatedData.email);
    this.data.phoneNumber.set(updatedData.phoneNumber);
    this.data.date.set(updatedData.date);
    this.data.time.set(updatedData.time);
    this.data.kind.set(updatedData.kind);
    this.data.color.set(updatedData.color);
    this.data.animal.set(updatedData.animal);
    this.data.message.set(updatedData.message);
    this.data.hobbies=updatedData.hobbies;

    // Save to localStorage
    localStorage.setItem('userFormData', JSON.stringify(updatedData));
    console.log('✅ Updated & saved', updatedData);
  }
  // name(){
  //   this.data.name();
  // }
  //   set name(value: string) {
  //   this.data.name.set(value);
  // }
}
