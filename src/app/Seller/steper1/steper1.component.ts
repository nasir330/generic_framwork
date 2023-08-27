import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormData } from 'src/app/models/form-data-model';
import { SellerRegisterFormService } from 'src/app/services/seller-register-form.service';
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
export class Steper1Component implements OnInit {
  formData: any = {}; // Initialize formData object here
  selectedFile: File | null = null;

  firstFormGroup: FormGroup = new FormGroup({}); // Initialize with an empty form group
  secondFormGroup: FormGroup = new FormGroup({}); // Initialize with an empty form group
  thirdFormGroup: FormGroup = new FormGroup({}); // Initialize with an empty form group
  fourthFormGroup: FormGroup = new FormGroup({}); // Initialize with an empty form group
  fifthFormGroup: FormGroup = new FormGroup({}); // Initialize with an empty form group
  isLinear = false;

  checked = false;
  indeterminate = false;
  radio1: 'before' | 'after' = 'after';  
  disabled = false;
  
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    private _formBuilder: FormBuilder,
    private sellerRegistrationFormService: SellerRegisterFormService
    ) {}

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        businessLocation: ['', Validators.required],
        businessType: ['', Validators.required]       
      });
      this.secondFormGroup = this._formBuilder.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        cityzenship: ['', Validators.required],
        countryBirth: ['', Validators.required],
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
        country: ['', Validators.required],
        zipCode: ['', Validators.required],
        building: ['', Validators.required],
        houseNo: ['', Validators.required],
        cityTown: ['', Validators.required],
        locality: ['', Validators.required] 
      });
      this.thirdFormGroup = this._formBuilder.group({
        cardNumber: ['', Validators.required],
        expMonth: ['', Validators.required],
        expYear: ['', Validators.required],
        cardHolder: ['', Validators.required]       
      });
      this.fourthFormGroup = this._formBuilder.group({
        storeName: ['', Validators.required],
        universalProduct: ['', Validators.required],
        desersity: ['', Validators.required],
        manufacturer: ['', Validators.required]
      });
      this.fifthFormGroup = this._formBuilder.group({
        frontSide: ['', Validators.required],
        backSide: ['', Validators.required],
        proofAddress: ['', Validators.required]
      });
    }
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
    onUpload() {
      if (this.selectedFile) {
        // Here you can implement the logic to upload the file
        console.log('Uploading file:', this.selectedFile.name);
        // Reset the selected file
        this.selectedFile = null;
      }
    }
  
    submit(){
      if(this.firstFormGroup.valid && this.secondFormGroup.valid){

        //initialize form data
        const formData: FormData = {
          //firstFormGroup
          businessLocation: this.firstFormGroup.value.businessLocation,
          businessType: this.firstFormGroup.value.businessType,
          //secondFormGroup
          firstName: this.secondFormGroup.value.firstName,
          middleName: this.secondFormGroup.value.middleName,
          lastName: this.secondFormGroup.value.lastName,
          phoneNumber: this.secondFormGroup.value.phoneNumber,
          cityzenship: this.secondFormGroup.value.cityzenship,
          countryBirth: this.secondFormGroup.value.countryBirth,
          day: this.secondFormGroup.value.day,
          month: this.secondFormGroup.value.month,
          year: this.secondFormGroup.value.year,
          country: this.secondFormGroup.value.country,
          zipCode: this.secondFormGroup.value.zipCode,
          building: this.secondFormGroup.value.building,
          houseNo: this.secondFormGroup.value.houseNo,
          cityTown: this.secondFormGroup.value.cityTown,
          locality: this.secondFormGroup.value.locality,
         //thirdFormGroup
          cardNumber: this.thirdFormGroup.value.cardNumber,
          expMonth: this.thirdFormGroup.value.expMonth,
          expYear: this.thirdFormGroup.value.expYear,
          cardHolder: this.thirdFormGroup.value.cardHolder,
         //fourthFormGroup
          storeName: this.fourthFormGroup.value.storeName,
          universalProduct: this.fourthFormGroup.value.universalProduct,
          desersity: this.fourthFormGroup.value.desersity,
          manufacturer: this.fourthFormGroup.value.manufacturer,
          //fifthFormGroup
          frontSide: this.fifthFormGroup.value.frontSide,
          backSide: this.fifthFormGroup.value.backSide,
          proofAddress: this.fifthFormGroup.value.proofAddress,
        };
        
        this.sellerRegistrationFormService.submitFormData(formData).subscribe(
          response => {
            console.log('Data submitted successfully:', response);
            //reset form data
            this.firstFormGroup.reset();
            this.secondFormGroup.reset();
            this.thirdFormGroup.reset();
            this.fourthFormGroup.reset();
            this.fifthFormGroup.reset();
          },
          error => {
            console.log('Error Occured:', error);
          }
        );

      }
    }

   
}
