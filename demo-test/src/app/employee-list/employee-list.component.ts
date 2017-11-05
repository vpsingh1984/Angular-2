import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmplyeeService]
})
export class EmployeeListComponent implements OnInit {

	employees = {};

  	constructor(private _employeeService:EmplyeeService) { }

	ngOnInit() {
		this._employeeService.getEmplyee()
			.subscribe(resEmployeeData => this.employees = resEmployeeData);


		console.log(this.employees);
	}

}
