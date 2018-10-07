import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { AppService } from '../app.service';

import { EmployeeUpdateComponent } from './update/employee-update.component';
import { EmployeeCreateComponent } from './create/employee-create.component';
import { EmployeeRemoveComponent } from './remove/employee-remove.component';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
	displayedColumns: string[] = ['eid', 'firstname', 'lastname', 'age', 'gender', 'role', 'address', 'contact', 'org_div', 'org_code', 'action'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	constructor(
		private api : AppService,
    public dialog: MatDialog,
    ){

	}

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		// this.getAllEmployee();
	}

	getAllEmployee() : void {
		this.api.getAllEmployee().subscribe(res => {
			console.log(res);
		});
	}

  openEdit() {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreate() {
    const dialogRef = this.dialog.open(EmployeeCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDelete() {
    const dialogRef = this.dialog.open(EmployeeRemoveComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


// table
export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  action: string;
  eid: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  role: string;
  address: string;
  contact: string;
  org_div: number;
  org_code: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
// {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: "as"},
// {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: "as"},
// {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: "sad"},
// {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: "asd"},
// {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: "asd"},
// {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: ""},
// {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: ""},
// {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: ""},
// {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: ""},
// {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: ""},
// {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', action: ""},
// {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', action: ""},
// {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', action: ""},
// {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', action: ""},
// {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', action: ""},
// {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', action: ""},
// {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', action: ""},
// {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', action: ""},
// {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', action: ""},
// {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', action: ""},

 
  { eid: 1, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 2, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 3, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 4, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 5, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 6, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 7, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
  { eid: 8, firstname: "Mohon", lastname: "Mitra", age: 36, gender: "M", role: "S", address: "", contact: "8774321541", org_div: 1, org_code: 1, action: "as" },
];
