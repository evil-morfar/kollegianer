import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [`
  :host
    display: flex
    height: 100%
    max-height: 100vh
    overflow: hidden
    flex-direction: column

  div
    height: inherit
  `]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
