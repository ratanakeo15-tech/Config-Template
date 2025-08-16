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
  name=''
  // get name(){
  //   return this.data.name();
  // }
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
  //clear data
  clearData() {
  // remove only the form data from local storage
  localStorage.removeItem('userFormData');

  // also clear values from your FormDataService signals
  this.data.name.set('');
  this.data.email.set('');
  this.data.phoneNumber.set('');
  this.data.date.set('');
  this.data.time.set('');
  this.data.kind.set('');
  this.data.color.set('');
  this.data.message.set('');
  this.data.animal.set('');
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
      this.name=existingData.name;
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
  //update data
updateData(newData?: Partial<{
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
  kind: string;
  color: string;
  message: string;
  animal: string;
}>) {
  // 1️⃣ Update signals (if newData is passed in)
  if (newData?.name !== undefined) this.data.name.set(newData.name);
  if (newData?.email !== undefined) this.data.email.set(newData.email);
  if (newData?.phoneNumber !== undefined) this.data.phoneNumber.set(newData.phoneNumber);
  if (newData?.date !== undefined) this.data.date.set(newData.date);
  if (newData?.time !== undefined) this.data.time.set(newData.time);
  if (newData?.kind !== undefined) this.data.kind.set(newData.kind);
  if (newData?.color !== undefined) this.data.color.set(newData.color);
  if (newData?.message !== undefined) this.data.message.set(newData.message);
  if (newData?.animal !== undefined) this.data.animal.set(newData.animal);

  // 2️⃣ Save latest signals into localStorage
  const updatedData = {
    name: this.name,
    email: this.data.email(),
    phoneNumber: this.data.phoneNumber(),
    date: this.data.date(),
    time: this.data.time(),
    kind: this.data.kind(),
    color: this.data.color(),
    message: this.data.message(),
    animal: this.data.animal(),
  };

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
