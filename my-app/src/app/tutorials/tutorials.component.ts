import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {


	public title = "this is tutorials component";
	public fname;
	public lname;
	public showElement = true;
	public color = "red";
	public colors = ["red", "green", "Blue"];


	/*onClick(value){
		alert(value);
	}*/




  //constructor() { }

  ngOnInit() {
  }

}
