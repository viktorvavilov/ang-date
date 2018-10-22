import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public setToStore(date: any): void {
    localStorage.setItem("data", date);
  }

  public setToLastStore(lastDate: any): void {
    localStorage.setItem("lastDate", JSON.stringify(lastDate));
  }

  public getLastFromStore() {
    let lastDates = JSON.parse(localStorage.getItem("lastDate"));
    if (!lastDates) {
      return [];
    } else {
      return lastDates;
    }
  }

  public clearLastStore():void {
    localStorage.removeItem("lastDate");
  }

}
