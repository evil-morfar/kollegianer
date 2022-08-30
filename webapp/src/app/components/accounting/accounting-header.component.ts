import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accounting-header',
  template: `
    <h3>{{ title }}</h3>
    <span fxFlex></span>

    <button *ngIf="showButton" mat-icon-button (click)="input.click()">
      <i class="material-icons">cloud_upload</i>
      <input
        #input
        type="file"
        (change)="onFileUpload($any($event).target.files)"
        style="display:none;"
      />
    </button>
  `,
  styles: [
    `
    :host
      background-color: #414141
      padding: 0 0.5rem
      /* height: 1.5rem */
      align-items: center

    h3
      color: #ffffff
      margin: 0

    i
      color: #ffffff
    `,
  ],
})
export class AccountingHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() onFileUpload = (file: FileList) => {};
  @Input() showButton = true;

  constructor() {}

  ngOnInit(): void {}
}
