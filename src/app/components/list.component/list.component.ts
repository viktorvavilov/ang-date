import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { StoreService } from '../../services/store.service';

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

  constructor(private storeService: StoreService) {}

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
    let dateList = this.storeService.getLastFromStore();
    if (!dateList) {
    } else {
      dateList.forEach(element => {
        this.dates.push({date: element});
      });
    }
  }

  public deleteDateElement(date: any) {
    this.dates = this.dates.filter(e => e.date !== date);
    // this.storeService.setToLastStore(JSON.stringify(this.dates));
  }

  public isDateListEmpty() {
    if (this.dates === []) {
      return false;
    } else {
      return true;
    }
  }

  public onChooseDate(date: any) {
    this.storeService.setToStore(date);
    this.animate();
  }
}