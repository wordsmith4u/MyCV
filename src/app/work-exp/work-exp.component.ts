import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  company = 'Max Technical Training';
  role = 'Student';
  startDate = '8/10/20';
  endDate = '2/15/21';

  constructor() { }

  ngOnInit(): void {
  }

}
