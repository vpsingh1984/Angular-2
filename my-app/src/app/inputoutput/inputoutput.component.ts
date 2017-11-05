import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css'],
  inputs: [`parentData`],
  outputs: [`childEvent`]
})
export class InputoutputComponent implements OnInit {

	public title = "Data from Child Element";
	public parentData:string;
	childEvent = new EventEmitter<string>();
	
	onChange(value:string){
		this.childEvent.emit(value);
	}

	date = new Date();


  //constructor() { }

  ngOnInit() {
  }

}
