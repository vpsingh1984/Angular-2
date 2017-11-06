import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '././services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmplyeeService]
})
export class AppComponent implements OnInit{
  title = 'Parent Component';
  
  public childData: string;

  ngOnInit():void{
  		//console.log("Ahsan",child);
  }

  chiledButton(e){
  	console.log("Ahsan",e);
  }

}
