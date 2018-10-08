import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CalculateService } from '../../services/calculate.service';
import { StoreService } from '../../services/store.service';

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

  public date: IDate  = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  public newDate;
  public dateList = [];

  constructor(private calculateService: CalculateService, StoreService: StoreService) {}

  ngOnInit() {
    console.log("Angular Date Application 0.1.3")
    this.getFromStore();
    let getDate = localStorage.getItem("data");
    if (getDate) {
      this.newDate = getDate;
      this.valueChange(this.newDate);
    }
  }

  public valueChange (event) {
    this.newDate = event;
    setInterval(() => {
      this.date =this.calculateService.calculate(this.newDate);
    }, 1000);
    localStorage.removeItem("data")
    localStorage.setItem("data", this.newDate)
  }

  public setToStore() {
    this.dateList.push(this.newDate);
    localStorage.setItem("lastDate", JSON.stringify(this.dateList));
  }

  public getFromStore() {
    this.dateList = JSON.parse(localStorage.getItem("lastDate"));
  }

  public clearStore() {
    localStorage.removeItem("lastDate");
  }
}

interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
