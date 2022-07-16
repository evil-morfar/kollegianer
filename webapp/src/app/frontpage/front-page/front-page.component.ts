import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  template: `
    <div class="container" fxFlex="100%" fxLayout="column">
      <app-top-box fxFlex="2 1 40vh"></app-top-box>
      <app-bottom-box fxFlex="2 1 40vh"></app-bottom-box>
    </div>
  `,
  styles: [
    `
    :host
      display: flex
      justify-content: center
    .container
      display: grid
      grid-gap: 1rem
      justify-items: center


    ::ng-deep .mat-typography p
      /* margin: 0 */
      text-align: center
  `,
  ],
})
export class FrontPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
