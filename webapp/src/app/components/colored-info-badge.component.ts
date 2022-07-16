import { Component, Input, OnInit } from '@angular/core';
import { InfoBadgeComponent } from './info-badge.component'

@Component({
  selector: 'app-colored-info-badge',
  template: `
    <div [ngClass]="toggled ? 'on' : 'off'">
      <p>{{ header }}</p>
      <img src="{{ imgPath }}" alt="" />
      <p *ngIf="infoText" class="infoText">{{ infoText }}</p>
    </div>
  `,
  styles: [
    `
  :host
    display: contents
    color: white
    div
      display: flex
      width: 33%
      flex-grow: 1
      flex-direction: column
      align-items: center
      justify-content: center
  .on
      background-color: #4caf50
  .off
      background-color: #ac3429

  img
      height: 50%

  `,
  ],
})
export class ColoredInfoBadgeComponent extends InfoBadgeComponent {
  @Input() header = '';
  @Input() toggled = false;

  constructor() {
    super();
  }
}
