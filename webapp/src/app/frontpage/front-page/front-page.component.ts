import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  template: `
    <div class="content container" fxFlex="95%" fxLayout="column">
      <app-top-box fxFlex="2 1 40vh"></app-top-box>
      <app-bottom-box fxFlex="2 1 42vh"></app-bottom-box>
    </div>
  `,
  styles: [
    `
    :host
      display: flex
      justify-content: center
      height: 100%
    .container
      grid-gap: 1rem

    ::ng-deep .mat-typography p
      text-align: center
  `,
  ],
})
export class FrontPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
