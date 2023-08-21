import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
