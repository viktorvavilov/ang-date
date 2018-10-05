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
}