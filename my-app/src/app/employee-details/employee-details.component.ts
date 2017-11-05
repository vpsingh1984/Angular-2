import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {

	employeesDetails = [];

  	constructor(private _employeeService:EmplyeeService) { }

	ngOnInit() {
		this.employeesDetails = this._employeeService.getEmplyee();
		console.log(this.employeesDetails);
	}

}
