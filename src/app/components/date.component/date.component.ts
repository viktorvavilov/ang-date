import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CalculateService } from '../../services/calculate.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  animations: [
    trigger('messageAnimation', [
      state('hidden', style({
        opacity: 0,
      })),
      state('shown', style({
        opacity: 1,
      })),
      transition('hidden => shown', animate('500ms ease-in')),
    ]),
  ],
  styleUrls: ['./date.component.scss']
})

export class DateComponent implements OnInit {
  public popupShown: boolean = false;
  public model;
  public date: IDate  = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  public test;

  public newDate;
  public dateList = [];
  public state: string = 'hidden';

  constructor(private calculateService: CalculateService, private storeService: StoreService) {}

  ngOnInit() {
    let getDate = localStorage.getItem("data");
    if (getDate) {
      this.newDate = getDate;
      this.calculate(this.newDate);
      this.valueChange(this.newDate);
    }
    this.getFromStore()
  }

  calculate(date) {
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
    this.animate();
    this.dateList.push(this.newDate);
    localStorage.setItem("lastDate", JSON.stringify(this.dateList));
  }

  public getFromStore() {
    this.dateList = this.storeService.getLastFromStore();
  }

  public openPopup() {
    this.popupShown = true;
  }
  public closePopup() {
    this.popupShown = false;
  }

  public clearStore() {
    this.dateList = [];
    localStorage.removeItem("lastDate");
    this.popupShown = false;
  }

  private animate() {
    this.state = (this.state === 'hidden' ? 'shown' : 'hidden');
    setTimeout(() => {
      this.state = 'hidden';
    }, 2000);
  }
}

interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
