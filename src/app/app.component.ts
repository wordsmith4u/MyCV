import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Ron Gerlach';
  address = '19767 Overlook Circle';
  phone = '812-527-7233';
  email = 'wordsmith4u@hotmail.com';
  displayWork: boolean = true;
  displayEd: boolean = true;
}
