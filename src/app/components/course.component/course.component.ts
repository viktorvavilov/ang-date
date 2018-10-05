import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../typings/course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() courseItem: ICourse;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public onDeleteCourse() {
    this.deleteCourse.emit(this.courseItem.id);
  }

}