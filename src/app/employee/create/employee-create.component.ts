import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

export interface Gender {
  value: string;
  viewValue: string;
}
export interface Roles {
  value: string;
  viewValue: string;
}

@Component({
	selector: 'app-employee-create',
	templateUrl: './employee-create.component.html',
	styleUrls: ['./employee-create.component.scss']
})

export class EmployeeCreateComponent {

  genders: Gender[] = [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'},
  ];

  roles: Roles[] = [
  {value: '0', viewValue: 'Role 1'},
  {value: '1', viewValue: 'Role 2'},
  ];

}
