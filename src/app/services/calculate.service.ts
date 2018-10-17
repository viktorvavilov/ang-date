import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public date: IDate  = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private dateNull: IDate  = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  constructor() { }

  public calculate(date): IDate {
    let timeStart = new Date().getTime();
    let timeEnd = new Date(date).getTime();
    let hourDiff = timeEnd - timeStart;
    let minDiff = hourDiff / 60 / 1000;
    let secDiff = hourDiff / 1000;
    let hDiff = hourDiff / 3600 / 1000;
    let days = hDiff / 24;

    this.date.days = Math.floor(days);
    if (this.date.days > 0) {
      this.date.hours = Math.floor(hDiff - (this.date.days * 24));
    } else {
    this.date.hours = Math.floor(hDiff);
    }
    this.date.minutes = Math.floor(minDiff - 60 * Math.floor(hDiff));
    this.date.seconds = Math.floor(secDiff % 60);

    if (this.date.seconds < 0) {
      return this.dateNull;
    } else {
      return this.date;
    }
  }
}

interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
