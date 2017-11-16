import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employees: any;

  	constructor(private _employeeService:EmplyeeService) { }

	ngOnInit() {
		this._employeeService.getEmplyee().subscribe(data => {
				this.employees = data;
				console.log("Actual data" + this.employees);
			}
		);
		
	}

}
