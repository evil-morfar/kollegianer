import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from 'src/app/models/KeyValue'

// One could make a unique rendering for each account as the original, but ZzZZzzz.

@Component({
  selector: 'app-account-renderer',
  template: `
    <app-accounting-header
    [onFileUpload]="onFileUpload"
      title="{{
        (type === 'beer'
          ? 'accounting.beer_account'
          : 'accounting.kitchen_account') | i18n
      }}"
    ></app-accounting-header>
    <div class="content" fxFlex="2 0 auto" fxLayout="column">
      <div
        fxFlex="2 0 auto"
        fxLayoutAlign="space-between center"
        *ngFor="let row of content"
      >
        <p>{{ row[0] }}</p>
        <p>
          {{ isNumber(row[1]) ? (row[1] | currency: 'DKK':'kr. ') : row[1] }}
        </p>
      </div>
    </div>
    <app-accounting-footer
      [regNum]="regNum || ''"
      [accountNum]="accountNum || ''"
    ></app-accounting-footer>
  `,
  styles: [
    `
      :host
        flex-direction: column
    `,
  ],
})
export class AccountRendererComponent implements OnInit {
  @Input() regNum? = '0400';
  @Input() accountNum? = '45678987';

  @Input() onFileUpload = (file: FileList) => {};

  @Input() type: 'beer' | 'kitchen' = 'beer';
  @Input() content: KeyValue[] | null = [
    /* ['Forbrug', ''],
    ['Øl', 3],
    ['Sodavand', 23],
    ['Cider', 0],
    ['I alt', 26],
    ['Status', ''],
    ['Straf', '0,00'],
    ['Depositum', ''],
    ['Gæld', '21,24'],
    ['Betalt', '200,00'],
    ['Indeværende', ''],
    ['Deadline', '00-08-2022'],
    ['At betale', 'kr. -65,78'], */
  ];

  constructor() {}

  ngOnInit(): void {}

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }
}
