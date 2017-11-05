import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employees = [];

  	constructor(private _employeeService:EmplyeeService) { }

	ngOnInit() {
		this.employees = this._employeeService.getEmplyee();
	}

}
