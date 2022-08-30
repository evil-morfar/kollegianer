import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting-footer',
  template: `
    <p>{{ 'accounting.reg_nr' | i18n }}</p>
    <p>{{ regNum }}</p>
    <p>{{ 'accounting.account_nr' | i18n }}</p>
    <p>{{ accountNum }}</p>
  `,
  styles: [
    `
    :host
      background-color: #414141
      padding: 0 0.5rem
      /* height: 1.5rem */
      align-items: center
      justify-content: space-between
      display: flex

    p
      color: #ffffff
      margin: 0

    `,
  ],
})
export class AccountingFooterComponent implements OnInit {
  @Input() regNum = '0400';
  @Input() accountNum = '45678987';

  constructor() {}

  ngOnInit(): void {}
}
