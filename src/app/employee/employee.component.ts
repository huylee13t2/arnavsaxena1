import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { AppService } from '../app.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
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

  openDialog() {
    const dialogRef = this.dialog.open(EmployeeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

// dialog
@Component({
  selector: 'employee-dialog',
  templateUrl: 'employee-dialog.component.html',
})
export class EmployeeDialogComponent {}

// table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: "as"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: "as"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: "sad"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: "asd"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: "asd"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: ""},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: ""},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: ""},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: ""},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: ""},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', action: ""},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', action: ""},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', action: ""},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', action: ""},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', action: ""},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', action: ""},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', action: ""},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', action: ""},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', action: ""},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', action: ""},
];
