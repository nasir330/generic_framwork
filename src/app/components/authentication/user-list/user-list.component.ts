// user-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('tableAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})


export class UserListComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'username', 'password', 'dob', 'phoneNumber', 'gender', 'sex', 'address','actions'];
  selectedUser: User | null = null;
  isTableDataAvailable: boolean = false;
  searchControl = new FormControl();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private userDataService: UserDataService) {
    this.dataSource = new MatTableDataSource<User>();
    console.log( this.dataSource );
  }

  ngOnInit(): void {
    this.getUsers();
  
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => this.applyFilter(value));
  
    // Set the paginator for the data source
    this.dataSource.paginator = this.paginator;
  }
  

  getUsers(): void {
    console.log( " get Users Invoked ");
    this.userDataService.getUsers().subscribe((users) => {
      this.dataSource.data = users;
      this.dataSource.sort = this.sort;
      this.isTableDataAvailable = true;
    });
    console.log( " get Users Invoked ", this.dataSource.data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
  }

  deleteUser(user: User): void {
    this.selectedUser = { ...user };
  }

  saveUser(): void {
    if (this.selectedUser) {
      this.userDataService.updateUser(this.selectedUser).subscribe(() => {
        this.getUsers();
        this.selectedUser = null;
      });
    }
  }
}




