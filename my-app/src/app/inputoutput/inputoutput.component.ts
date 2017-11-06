import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css'],
  inputs: [`parentData`],
  outputs: [`childEvent`]
})
export class InputoutputComponent implements OnInit {

	public title = "Data from Child Element ";
	public parentData:string;
	childEvent = new EventEmitter<string>();
	public data = "Rsystems";
	onChange(value:string){
		this.childEvent.emit(value);
	}

	date = new Date();

	sendData(){
		this.childEvent.emit("Childe Button Clicked");
	}
  //constructor() { }

  ngOnInit() {
  	this.childEvent.emit(this.title);
  }

}
