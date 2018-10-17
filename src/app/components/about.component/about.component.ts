import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('firstAnimation', [
        state('hidden', style({
            opacity: 0,
        })),
        state('shown', style({
          opacity: 1,
        })),
        transition('hidden => shown', animate('1000ms ease-in')),
    ]),
    trigger('secondAnimation', [
      state('hidden', style({
          opacity: 0,
      })),
      state('shown', style({
        opacity: 1,
      })),
      transition('hidden => shown', animate('1000ms ease-in')),
  ]),
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  stateText: string = 'hidden';
  stateName: string = 'hidden';

  public devEnable = false;
  public popupShown = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.animate();
    }, 1000);
  }

  animate() {
    this.stateText = (this.stateText === 'hidden' ? 'shown' : 'hidden');
    setTimeout(() => {
      this.stateName = (this.stateName === 'hidden' ? 'shown' : 'hidden');
    }, 1500);
  }

  public toggleDev(password) {
    let hash = this.hashIt(password)
    if (hash === 1481632) {
      this.devEnable = !this.devEnable;
    }
  }

  public togglePopup() {
    if (this.popupShown) {
      this.popupShown = false;
    } else {
      this.popupShown = true;
    }
  }

  public backFromDev() {
    this.devEnable = false;
  }

  private hashIt(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }

  public clearAllFromStorrage() {
    localStorage.removeItem("data");
    localStorage.removeItem("lastDate");
  }
}