import { Component } from '@angular/core';
import { EmplyeeService } from '././services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmplyeeService]
})
export class AppComponent {
  title = 'Parent Component';

  public childData: string;


}
