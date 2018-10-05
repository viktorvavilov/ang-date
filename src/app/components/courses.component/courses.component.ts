import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../typings/course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Array<ICourse> = [
    {
      id: 1,
      title: 'Title one',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit leo et rutrum tristique. Nulla auctor ligula sed cursus imperdiet. Vestibulum turpis orci.',
      duration: 120,
      date: '12.10.2018'
    },
    {
      id: 2,
      title: 'Title two',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit leo et rutrum tristique. Nulla auctor ligula sed cursus imperdiet. Vestibulum turpis orci.',
      duration: 96,
      date: '27.10.2018'
    }
  ];

  constructor() {}

  ngOnInit() {}

  public onDeleteCourse(id: number) {
    console.log("Delete course " + id);
  }

}