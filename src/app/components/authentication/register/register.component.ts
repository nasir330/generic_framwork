import { Component } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UserDataService } from '../../../services/user.service'
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  dob: string = '';
  phoneNumber: string = '';
  gender: string = '';
  sex: string = '';
  address: string = '';
  logger: LoggerService;
  id:string = '';

  constructor( logger: LoggerService, private dataService: UserDataService ){
    this.logger = logger;

  }

  onRegisterSubmit(): void {
    // Implement your registration logic here.
    
    const newUser: User = {
      id: this.id,
      username: this.username,
      password: this.password,
      dob: this.dob,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      sex: this.sex,
      address: this.address
    };
    this.dataService.addUser(newUser).subscribe(
      (response) => {
        console.log('User added successfully:', response);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );

    this.logger.log('Register form submitted.');
    this.logger.log('Username:'+this.username);
    this.logger.log('Password:'+ this.password);
    this.logger.log('DOB:'+ this.dob);
    this.logger.log('Phone Number:'+this.phoneNumber);
    this.logger.log('Gender:'+this.gender);
    this.logger.log('Sex:'+this.sex);
    this.logger.log('Address:'+this.address);
  }
}
