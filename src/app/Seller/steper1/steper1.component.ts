import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {name: 'Helium', weight: 4.0026, symbol: 'He'},
  {name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {name: 'Boron', weight: 10.811, symbol: 'B'},
  {name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
 
];


@Component({
  selector: 'app-steper1',
  templateUrl: './steper1.component.html',
  styleUrls: ['./steper1.component.css']
})
export class Steper1Component {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  checked = false;
  indeterminate = false;
  radio1: 'before' | 'after' = 'after';  
  disabled = false;
  
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private _formBuilder: FormBuilder) {}
}
