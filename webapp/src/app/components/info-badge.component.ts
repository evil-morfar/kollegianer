import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-info-badge',
  template: `
    <ng-content></ng-content>
    <img src="{{imgPath}}" alt="">
    <p *ngIf="infoText" class="infoText">{{infoText}}</p>
  `,
  styles: [`
    :host
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center
      justify-content: center
      > img
        height: 80%
  `],
})
export class InfoBadgeComponent implements OnInit {

  @Input() infoText!: string;

  @Input() imgPath!: string;

  constructor() {}

  ngOnInit(): void {}
}
