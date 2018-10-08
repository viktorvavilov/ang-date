import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public getLastFromStore() {
    return JSON.parse(localStorage.getItem("lastDate"));
  }

  public setToStore(date: any): void {
    localStorage.setItem("data", date);
  }

}
