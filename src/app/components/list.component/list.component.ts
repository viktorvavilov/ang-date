import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
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
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dates = [];
  state: string = 'hidden';

  constructor() {}

  ngOnInit() {
    this.getFromStore();
  }

  private animate() {
    this.state = (this.state === 'hidden' ? 'shown' : 'hidden');
    setTimeout(() => {
      this.state = 'hidden';
    }, 2000);
  }

  public getFromStore() {
    let dateList = JSON.parse(localStorage.getItem("lastDate"));

    if (!dateList) {
      console.log("=== Storage is empty ===");
    } else {
      console.log("=== Get from storage ===");
    }
    dateList.forEach(element => {
      this.dates.push({date: element});
    });

  }

  private setFromStore(date: any) {
    localStorage.setItem("data", date);
  }

  public onChooseDate(date: any) {
    console.log("New date is " + date);
    this.setFromStore(date);
    this.animate();
  }
}