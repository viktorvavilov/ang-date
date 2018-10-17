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

  public dateNull: IDate  = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  public newDate;
  public dateList = [];
  public state: string = 'hidden';
  private timer;

  constructor(private calculateService: CalculateService, private storeService: StoreService) {}

  ngOnInit() {
    this.newDate = localStorage.getItem("data");
    if (this.newDate) {
      this.calculate(this.newDate);
      this.valueChange(this.newDate);
    }
    this.getFromStore();
  }

  calculate(date) {
    this.date = this.calculateService.calculate(date);
  }

  public valueChange (event) {
    clearInterval(this.timer);
    this.newDate = event;
    this.timer = setInterval(() => {
      this.calculate(localStorage.getItem("data"));
    }, 1000);
    localStorage.setItem("data", this.newDate);
  }

  public setToStore() {
    this.animate();
    this.dateList.push(this.newDate);
    this.storeService.setToLastStore(JSON.stringify(this.dateList));
  }

  private getFromStore() {
    this.dateList = this.storeService.getLastFromStore();
  }

  public clearStore() {
    this.dateList = [];
    localStorage.removeItem("lastDate");
    this.popupShown = false;
  }

  public togglePopup() {
    if (this.popupShown) {
      this.popupShown = false;
    } else {
      this.popupShown = true;
    }
  }

  private animate() {
    this.state = (this.state === 'hidden' ? 'shown' : 'hidden');
    setTimeout(() => {
      this.state = 'hidden';
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}

interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
