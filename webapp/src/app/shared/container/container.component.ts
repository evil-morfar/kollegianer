import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [`
  :host
    flex-wrap: wrap
    justify-content: center
    height: 100vh
    overflow: hidden
  `]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
