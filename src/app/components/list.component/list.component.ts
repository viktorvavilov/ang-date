import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dates = [];

  constructor() {}

  ngOnInit() {
    this.getFromStore();
  }

  public getFromStore() {
    let dateList = JSON.parse(localStorage.getItem("lastDate"));

    if (!dateList) {
      console.log("=== Storage is empty ===");
    } else {
      console.log("=== Get from storage ===");
      console.log(dateList);
    }

    dateList.forEach(element => {
      this.dates.push({date: element});
    });

  }

  public onChooseDate(date: any) {
    console.log("Delete course " + date);
  }
}