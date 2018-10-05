import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  animations: [
    trigger('minutes', [
      transition("* => *", [style({opacity: 0}), animate("2000ms")])
   ])
  ],
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  public hours: number;
  public minutes: number;
  public seconds: number;

  public date: IDate  = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  public newDate;
  public dateList = [];

  constructor() {}

  ngOnInit() {
    let getDate = localStorage.getItem("data");
    if (getDate) {
      this.newDate = getDate;
      this.valueChange(this.newDate);
    }
  }

  calculate(date) {
    let timeStart = new Date().getTime();
    let timeEnd = new Date(date).getTime();
    let hourDiff = timeEnd - timeStart;
    let minDiff = hourDiff / 60 / 1000;
    let secDiff = hourDiff / 1000;
    let hDiff = hourDiff / 3600 / 1000;
    let day = hDiff / 24;

    this.date.hours = Math.floor(hDiff);
    this.date.minutes = Math.floor(minDiff - 60 * this.date.hours);
    this.date.seconds = Math.floor(secDiff % 60);
  }

  public valueChange (event) {
    this.newDate = event;
    setInterval(() => {
      this.calculate(this.newDate);
    }, 1000);
    localStorage.removeItem("data")
    localStorage.setItem("data", this.newDate)
  }

  public setToStore() {
    console.log("=== Added to storage ===");
    this.dateList.push(this.newDate);
    localStorage.setItem("lastDate", JSON.stringify(this.dateList));
  }

  public getFromStore() {
    this.dateList = JSON.parse(localStorage.getItem("lastDate"));

    if (!this.dateList) {
      console.log("=== Storage is empty ===");
    } else {
      console.log("=== Get from storage ===");
      console.log(this.dateList);
    }
  }

  public clearStore() {
    console.log("=== Storage is clear ===");
    localStorage.removeItem("lastDate");
  }
}

interface IDate {
  hours: number;
  minutes: number;
  seconds: number;
}
