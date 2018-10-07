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
	selector: 'app-employee-update',
	templateUrl: './employee-update.component.html',
	styleUrls: ['./employee-update.component.scss']
})

export class EmployeeUpdateComponent {

  genders: Gender[] = [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'},
  ];

  roles: Roles[] = [
  {value: '0', viewValue: 'Role 1'},
  {value: '1', viewValue: 'Role 2'},
  ];

}
