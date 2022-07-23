import {Component, OnInit} from '@angular/core';
import { I18nService } from '../shared/services/i18n.service'

@Component({
  selector: 'app-settings-page',
  template: `
    <app-top-menu
      title="{{'settings.settings' | i18n}}"
      [hideSettings]="true"
      fxFlex="0 10 100%"
    ></app-top-menu>
    <div
      class="container"
      fxFlex="90%"
      fxFlex.gt-sm="65%"
      fxFlex.gt-md="50%"
      fxLayout="column"
      fxLayoutGap="1rem"
    >
      <h2>{{"settings.profile" | i18n}}</h2>
      <mat-form-field fxFlex fxLayout="column">
        <p>{{"settings.name" | i18n}}</p>
        <input matInput type="text" value="Nichlas N Pilemand" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>{{"settings.email" | i18n}}</p>
        <input matInput type="email" value="nnpilemand@gmail.com" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>{{"settings.birthday" | i18n}}</p>
        <input matInput type="string" value="29/03/1992" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>{{"settings.phone_number" | i18n }}</p>
        <input matInput type="tel" value="20441559" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>{{"settings.room" | i18n }}</p>
        <input matInput type="number" value="1701" />
      </mat-form-field>
      <div>
        <p>{{"settings.duty" | i18n }}</p>
        <p>Regnskab</p>
      </div>
      <div>
        <p>{{"settings.color" | i18n }}</p>
        <p>#ffffff</p>
      </div>
      <button mat-raised-button color="primary">{{"settings.change_password" | i18n}}</button>
      <button mat-raised-button color="warn">{{"settings.delete_account" | i18n }}</button>
    </div>
  `,
  styles: [
    `
    :host
      flex-wrap: wrap
      justify-content: center
    .container
      margin: 1rem
      >div
        display: flex
        >p:nth-child(2)
          text-align: end
          flex: 1 3 100%

    input
      text-align: right

    ::ng-deep div.mat-form-field-infix
      display: contents
    `,
  ],
})
export class SettingsPageComponent implements OnInit {
  constructor(public i18n: I18nService) {}

  ngOnInit(): void {}
}
