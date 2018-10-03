import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class AppService {

	constructor(
		private http: HttpClient,
		) { }

	BASE_URL = "http://aijobrecruiters.com/";
	// BASE_URL = "http://localhost:8000/";

	// headers = new HttpHeaders();
 //    headers.append('Content-Type', 'application/json');
 //    headers.append('authorization', 'Bearer ' + 'a7a962d7360f17c3fa65da4ec7306e97df667c2a');

	headers = new HttpHeaders({
		'Accept': 'application/json',
		'Authorization': 'Token a7a962d7360f17c3fa65da4ec7306e97df667c2a'
	});

	login(data) : Observable<any> {
		const url = this.BASE_URL + 'api/signin/';
		return this.http.post(url, data).pipe(catchError(this.handleError('login',[])))
	}

	getAllEmployee() : Observable<any> {
		const url = this.BASE_URL + 'api/employeelist/'
		return this.http.get(url, {headers : this.headers}).pipe(catchError(this.handleError('getAllEmployee', [])))
	}

	getEmployee(id) : Observable<any> {
		const url = `${this.BASE_URL}employeeone/${id}/`;
		return this.http.get(url).pipe(catchError(this.handleError('getEmployee', [])))
	}

	deleteEmployee(id) : Observable<any> {
		const url = `${this.BASE_URL}employeedel/`;
		const obj = {
			"eid":26,
		}
		return this.http.post(url, obj).pipe(catchError(this.handleError('deleteEmployee', [])))
	}

	createEmployee(data) : Observable<any> {
		const url = this.BASE_URL + 'employeeadd/';
		const obj = {
			"firstname":"Vishnu Deo",
			"lastname":"kumar",
			"contact":"9805673434",
			"org_div":1,
			"org_id":1
		}
		return this.http.post(url, obj).pipe(catchError(this.handleError('createEmployee', [])))
	}

	updateEmployee(data) : Observable<any> {
		const url = this.BASE_URL + 'employeeupdate/';
		const obj = {
			"emp_id":84,
			"age":33,
			"gender":"male",
			"address":"24/c, Nandan street, Bankura"
		}
		return this.http.post(url, obj).pipe(catchError(this.handleError('updateEmployee', [])))
	}


	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(error as T);
		};
	}

}