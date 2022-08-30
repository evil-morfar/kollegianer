import { BasicDialogComponent } from './../shared/components/basic-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import {Observable, Subscription} from 'rxjs';
import {AccountingService} from './../services/accounting.service';
import {I18nService} from './../shared/services/i18n.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {KeyValue} from '../models/KeyValue';

@Component({
  selector: 'app-accounting-page',
  template: `
    <app-account-renderer
      type="beer"
      [content]="accountingService.getUserBeerAccount() | async"
      [accountNum]="(accountingService.getBeerAccountNumber() | async)?.account"
      [regNum]="(accountingService.getBeerAccountNumber() | async)?.reg"
      [onFileUpload]="onBeerUpload"
    ></app-account-renderer>
    <app-account-renderer
      type="kitchen"
      [content]="accountingService.getUserKitchenAccount() | async"
      [accountNum]="
        (accountingService.getKitchenAccountNumber() | async)?.account
      "
      [regNum]="(accountingService.getKitchenAccountNumber() | async)?.reg"
      [onFileUpload]="onKitchenUpload"
    ></app-account-renderer>
    <app-accounting-totals></app-accounting-totals>
  `,
  styles: [
    `
  :host
    display: flex
    flex: 2 1 80vh
    flex-direction: column
    overflow: hidden scroll

    app-account-renderer
      min-height: 100%
  `,
  ],
})
export class AccountingPageComponent implements OnInit {
  onBeerUpload = (files: FileList) => {
    this.accountUpload(files);
  };

  onKitchenUpload = (files: FileList) => {
    this.accountUpload(files, true);
  };

  constructor(public accountingService: AccountingService, private dialog: Dialog, private i18n: I18nService) {}

  ngOnInit(): void {
    /* this.onBeerUpload = this.beerAccountUpload; */
  }

  async accountUpload(files: FileList, isKitchen = false) {
    try {
      const file = files.item(0);
      if (!file) {
        throw new Error('Null file');
      }
      await this.accountingService.uploadFile(file, isKitchen);
    }
    catch (e) {
      this.dialog.open(BasicDialogComponent, {
        data: {
          header: this.i18n.get('accounting.something_went_wrong'),
          text: e,

        },
      });
    }
  }
}
