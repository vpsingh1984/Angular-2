import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
  providers: [service]
})
export class TutorialsComponent implements OnInit {

	public title = "Hello Vijay";
	public imgPath = "http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg";

  //constructor() { }

  ngOnInit() {
  }

}
