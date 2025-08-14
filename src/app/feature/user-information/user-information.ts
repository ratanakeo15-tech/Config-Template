import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../user-form/form-data.service';


@Component({
  selector: 'app-display-data',
  templateUrl: './user-information.html',
})
export class DisplayDataComponent implements OnInit {
  data: any = null;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.formData$.subscribe(value => {
      this.data = value; // update when submitFormData is called
    });
  }
}
