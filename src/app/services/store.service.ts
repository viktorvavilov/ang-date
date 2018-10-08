import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public getLastFromStore() {
    let lastDates = JSON.parse(localStorage.getItem("lastDate"));
    if (!lastDates) {
      return [];
    } else {
      return lastDates;
    }
  }

  public setToStore(date: any): void {
    localStorage.setItem("data", date);
  }

}
