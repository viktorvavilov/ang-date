import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  @Input() dateItem: any;
  @Output() chooseDate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public onChooseDate() {
    this.chooseDate.emit(this.dateItem.date);
  }
}