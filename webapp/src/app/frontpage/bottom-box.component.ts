import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-box',
  template: `
    <div class="section">
      <app-info-badge
        imgPath="assets/img/keep_calm_and_shots.png"
        (click)="shotsOnClick()"
        infoText="{{ shots$ | async }}"
      ></app-info-badge>
      <app-info-badge
        imgPath="assets/img/mvp.png"
        (click)="mvpOnClick()"
        infoText="{{ mvp$ | async }}"
        style="border-left: 1px solid #ddd"
      ></app-info-badge>
    </div>
    <div class="section">
      <app-colored-info-badge
        header="{{ 'overview.beerpong_button' | i18n }}"
        imgPath="assets/img/beerpong.png"
        (click)="fbs.toggleBeerPong()"
        [infoText]="
          ((beerpong$ | async)
            ? 'overview.beerpong_button_true'
            : 'overview.beerpong_button_false') | i18n
        "
        [toggled]="(beerpong$ | async) === true"
      ></app-colored-info-badge>
      <app-colored-info-badge
        header="{{ 'overview.partymode_button' | i18n }}"
        imgPath="assets/img/party_mode.png"
        (click)="fbs.togglePartyMode()"
        [infoText]="
          (fbs.getPartyMode() | async) ||
          ('overview.partymode_button_false' | i18n)
        "
        [toggled]="(fbs.getPartyMode() | async) != ''"
      >
      </app-colored-info-badge>
      <app-colored-info-badge
        header="{{ 'overview.fox_button' | i18n }}"
        imgPath="assets/img/fox.png"
        (click)="fbs.toggleFox()"
        [infoText]="
          ((fbs.getFox() | async)
            ? 'overview.fox_button_true'
            : 'overview.fox_button_false') | i18n
        "
        [toggled]="!!(fbs.getFox() | async)"
      ></app-colored-info-badge>
    </div>
  `,
  styles: [
    `:host
      display: flex
      flex-direction: column
      border-radius: 1rem
      box-shadow: 0px 10px 10px 0px #aaa
      overflow: hidden

      .section
        display: flex
        height: 50%
        align-content: center
    `,
  ],
})
export class BottomBoxComponent implements OnInit {
  mvp$ = this.fbs.getMvp();
  shots$ = this.fbs.getShots();
  beerpong$ = this.fbs.getBeerPong();

  constructor(public fbs: FirebaseService) {}

  ngOnInit(): void {}

  shotsOnClick() {
    // TODO
    console.log('shotsOnClick');
  }

  mvpOnClick() {
    // TODO
    console.log('mvpOnClick');
  }

  getNextBirthday() {
    // TODO
    console.log('getNextBirthday');
  }
}
