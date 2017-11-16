import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmplyeeService]
})
export class EmployeeListComponent implements OnInit {

	employees: any;

  	constructor(private _employeeService:EmplyeeService) { }

	/*ngOnInit() {
		this._employeeService.getEmplyee()
			.subscribe(resEmployeeData => this.employees = resEmployeeData);


		console.log(this.employees);
	}*/
	ngOnInit() {
		this._employeeService.getEmplyee().subscribe(data => {
				this.employees = data;
				console.log("Actual data: " + this.employees);
			}
		);
		
	}

}
