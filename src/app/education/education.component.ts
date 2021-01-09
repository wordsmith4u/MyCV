import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  highSchool = 'Bonnabel';
  college = 'University of Memphis';
  degree = 'BA & MA';

  constructor() { }

  ngOnInit(): void {
  }

}
