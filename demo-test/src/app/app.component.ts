import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  appTitle: string = 'Welcome';
   appList: any[] = [ {
      "ID": "First Imae",
      "url": 'https://www.tutorialspoint.com/angular2/images/images_download.jpg'
   },{
      "ID": "Second Image",
      "url": 'https://www.tutorialspoint.com/angular2/images/images_download.jpg'
   } ];

}
