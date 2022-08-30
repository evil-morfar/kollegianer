import { Component, OnInit } from '@angular/core';
import { TopScore } from './../../models/TopScore';
import { AccountingService } from './../../services/accounting.service';

@Component({
  selector: 'app-accounting-totals',
  template: `
    <app-accounting-header
      title="{{ 'accounting.topscorers' | i18n }}"
      [showButton]="false"
    ></app-accounting-header>
    <div class="content" fxLayout="column" fxFlex="2 0 auto">
      <h3>{{ 'accounting.beer' | i18n }}</h3>
      <div
        *ngFor="let entry of beer; index as i"
        fxFlex
        fxLayoutAlign="space-between"
      >
        <div fxFlex fxLayoutAlign="start center" fxLayoutGap="1rem">
          <mat-icon [ngStyle]="{color: indexToTrophyColor(i)}"
            >emoji_events</mat-icon
          >
          <span>{{ entry.num }}</span>
        </div>
        <p>{{ entry.user }}</p>
      </div>
      <h3>{{ 'accounting.soda' | i18n }}</h3>
      <div
        *ngFor="let entry of soda; index as i"
        fxFlex
        fxLayoutAlign="space-between"
      >
        <div fxFlex fxLayoutAlign="start center" fxLayoutGap="1rem">
          <mat-icon [ngStyle]="{color: indexToTrophyColor(i)}"
            >emoji_events</mat-icon
          >
          <span>{{ entry.num }}</span>
        </div>
        <p>{{ entry.user }}</p>
      </div>
      <h3>{{ 'accounting.cider' | i18n }}</h3>
      <div
        *ngFor="let entry of cider; index as i"
        fxFlex
        fxLayoutAlign="space-between"
      >
        <div fxFlex fxLayoutAlign="start center" fxLayoutGap="1rem">
          <mat-icon [ngStyle]="{color: indexToTrophyColor(i)}"
            >emoji_events</mat-icon
          >
          <span>{{ entry.num }}</span>
        </div>
        <p>{{ entry.user }}</p>
      </div>
      <h3>{{ 'accounting.total' | i18n }}</h3>
      <div
        *ngFor="let entry of total; index as i"
        fxFlex
        fxLayoutAlign="space-between"
      >
        <div fxFlex fxLayoutAlign="start center" fxLayoutGap="1rem">
          <mat-icon [ngStyle]="{color: indexToTrophyColor(i)}"
            >emoji_events</mat-icon
          >
          <span>{{ entry.num }}</span>
        </div>
        <p>{{ entry.user }}</p>
      </div>
    </div>
  `,
  styles: [
    `
    :host
      display: flex
      flex-direction: column
      min-height: 100%

  `,
  ],
})
export class AccountingTotalsComponent implements OnInit {
  beer: TopScore = [];
  soda: TopScore = [];
  cider: TopScore = [];
  total: TopScore = [];

  constructor(public accountingService: AccountingService) {}

  ngOnInit(): void {
    this.accountingService.getTopScorers().then(data => {
      this.beer = data.beer;
      this.soda = data.soda;
      this.cider = data.cider;
      this.total = data.total;
    });
  }

  indexToTrophyColor(index: number) {
    switch (index) {
      case 0:
        return '#d4c257';
      case 1:
        return '#c0c0c0';
      default:
        return '#8C7853';
    }
  }
}
