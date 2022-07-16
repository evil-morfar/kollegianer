import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings-page',
  template: `
    <app-top-menu
      title="Settings"
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
      <h2>Profil</h2>
      <mat-form-field fxFlex fxLayout="column">
        <p>Navn:</p>
        <input matInput type="text" value="Nichlas N Pilemand" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>Email:</p>
        <input matInput type="email" value="nnpilemand@gmail.com" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>Fødselsdato:</p>
        <input matInput type="string" value="29/03/1992" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>Telefon:</p>
        <input matInput type="tel" value="20441559" />
      </mat-form-field>
      <mat-form-field fxFlex fxLayout="column">
        <p>Værelse:</p>
        <input matInput type="number" value="1701" />
      </mat-form-field>
      <div>
        <p>Tjans:</p>
        <p>Regnskab</p>
      </div>
      <div>
        <p>Temafarve:</p>
        <p>#ffffff</p>
      </div>
      <button mat-raised-button color="primary">Skift adgangskode</button>
      <button mat-raised-button color="warn">Slet konto</button>
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
  constructor() {}

  ngOnInit(): void {}
}
