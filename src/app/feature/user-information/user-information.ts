import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormDataService } from '../user-form/form-data.service';
import { FormControl, FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-display-data',
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './user-information.html',
})
export class DisplayDataComponent {
  data = inject(FormDataService);
  get name(){
    return this.data.name();
  }
  get email(){
    return this.data.email();
  }
  get date(){
    return this.data.date();
  }
  get time(){
    return this.data.time();
  }
  get PhoneNumber(){
    return this.data.phoneNumber
  }
  get kind(){
    return this.data.kind();
  }
  get color(){
    return this.data.color();
  }
  get pet(){
    return this.data.animal();
  }
  get text(){
    return this.data.message();
  }

  // profileForm = new FormGroup({
  //   name: new FormControl(this.data.name),
  //   email: new FormControl(this.data.email),
  // });
  constructor() {
    // get data from local storage and then parse it to json object
    const existingData =
      JSON.parse(localStorage.getItem('userFormData') || '') || null;

    console.log('existingData', existingData);

    if (existingData !== '' && existingData !== null) {
      //display data to screen
      this.data.name.set(existingData.name);
      this.data.email.set(existingData.email);
      this.data.phoneNumber.set(existingData.phoneNumber);
      this.data.date.set(existingData.date);
      this.data.time.set(existingData.time);
      this.data.kind.set(existingData.kind);
      this.data.color.set(existingData.color);
      this.data.message.set(existingData.message);
      this.data.animal.set(existingData.animal);
    } else {
      this.data;
    }
    console.log('e', existingData);
  } 
  // name(){
  //   this.data.name();
  // }
//   set name(value: string) {
//   this.data.name.set(value);
// }
}
