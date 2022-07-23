
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-dialog',
  template: `
    <mat-card class="mat-elevation-z1">
      <mat-card-title>{{data.header ?? ""}}</mat-card-title>
      <mat-card-content>{{data.text ?? ""}}</mat-card-content>
      <mat-card-actions fxLayout fxLayoutAlign="end center">
        <button mat-raised-button color="warn" (click)="closeDialog()">
          {{"modal.cancel" | i18n}}
        </button>
        <button
          mat-raised-button
          color="primary"
          *ngIf="data.buttonName"
          (click)="userButtonOnClick(data.buttonFunc)"
        >
          {{ data.buttonName }}
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [``],
})
export class BasicDialogComponent {
  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      header?: string;
      text?: string;
      buttonName?: string;
      buttonFunc?: () => void;
    },
    public dialogRef: DialogRef<string>,
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  userButtonOnClick(func?: () => void) {
    if (func) func();
    this.closeDialog();
  }
}
