import { Injectable } from '@angular/core';

@Injectable()

export class EmplyeeService{

	getEmplyee(){
		return [
			{"id": 1, "name": "Vijay", "age": 33, "gender": "Male"},
			{"id": 2, "name": "Arijit", "age": 25, "gender": "Male"},
			{"id": 3, "name": "Shann", "age": 30, "gender": "Male"},
			{"id": 4, "name": "Mahesh", "age": 53, "gender": "Male"}
		]
	}


}