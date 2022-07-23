import { I18nService } from './../shared/services/i18n.service';
import {BasicDialogComponent} from './../shared/components/basic-dialog.component';
import {FirebaseService} from './../services/firebase.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViMangler} from '../models/ViMangler';
import {Subscription, take} from 'rxjs';
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: 'app-shopping-page',
  template: `
    <mat-form-field>
      <mat-label>{{ 'vi_mangler.description' | i18n }}</mat-label>
      <input
        matInput
        type="text"
        [(ngModel)]="newItem"
        (keydown.enter)="onSubmit()"
      />
      <button
        *ngIf="newItem"
        matSuffix
        mat-icon-button
        (click)="onSubmit()"
        type="submit"
      >
        <mat-icon>add</mat-icon>
      </button>
    </mat-form-field>
    <div
      class="item"
      *ngFor="let item of viMangler; index as i"
      longPress
      (mouseLongPress)="onLongPress(i)"
    >
      <p fxFlex="1 1 10%">{{ item.room }}</p>
      <p fxFlex="2 1 auto" [ngClass]="item.checked ? 'checked' : ''">
        {{ item.item }}
      </p>
      <p fxFlex="1 1 10%">{{ item.date }}</p>
      <button mat-icon-button (click)="onPurchase(i)">
        <mat-icon>add_shopping_cart</mat-icon>
      </button>
    </div>
    <div fxFlex></div>
  `,
  styles: [
    `
    :host
      display: flex
      flex: 2 1 80vh
      flex-direction: column
      justify-content: flex-start
      padding: 1rem

      .item
        margin: 5px 5px
        text-align: center
        align-items: center
        border-top-style: solid
        border-bottom-style: solid
        border-color: #ccc
        border-width: 1px

      p
        margin: 0

      .checked
        text-decoration: line-through

    `,
  ],
})
export class ShoppingPageComponent implements OnInit, OnDestroy {
  newItem = '';
  viMangler!: ViMangler[];

  private subscription = new Subscription();
  private dialogOpen = false;

  constructor(private fbs: FirebaseService, private dialog: Dialog, private i18n: I18nService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.fbs.getViMangler().subscribe(viMangler => {
        this.viMangler = viMangler;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const now = new Date();
    this.fbs.addViMangler(
      new ViMangler('1701', this.newItem, `${now.getDate()}/${now.getMonth()}`),
    );
    this.newItem = '';
  }

  onPurchase(index: number) {
    console.log('On Purcahse', index, this.viMangler[index]);
    this.fbs.viManglerOnPurchase(index);
  }

  onLongPress(index: number) {
    if (this.dialogOpen) {
      return;
    }
    this.dialogOpen = true;
    const item = this.viMangler[index];
    this.dialog
      .open(BasicDialogComponent, {
        minWidth: '90vw',
        data: {
          header: this.i18n.get('vi_mangler.delete_modal_title') + item.item,
          text:
            this.i18n.get('vi_mangler.delete_modal_text') + item.item + '?',
          buttonName: this.i18n
            .get('vi_mangler.delete_model_ok')
            .toUpperCase(),
          buttonFunc: () => {
            this.fbs.removeViMangler(index);
          },
        },
      })
      .closed.pipe(take(1))
      .subscribe(() => {
        this.dialogOpen = false;
      });
  }
}
