import { TopBoxComponent } from './top-box.component';
import { Observable, of } from 'rxjs';
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
        header="BeerPong på coxk"
        imgPath="assets/img/beerpong.png"
        (click)="fbs.toggleBeerPong()"
        [infoText]="(fbs.getBeerPong() | async) || 'Nah fam'"
        [toggled]="(fbs.getBeerPong() | async) != ''"
      ></app-colored-info-badge>
      <app-colored-info-badge
        header="PARTY MODE"
        imgPath="assets/img/party_mode.png"
        (click)="fbs.togglePartyMode()"
        [infoText]="(fbs.getPartyMode() | async) || 'Später mein freund'"
        [toggled]="(fbs.getPartyMode() | async) != ''"
      >
      </app-colored-info-badge>
      <app-colored-info-badge
        header="Øl-ræven"
        imgPath="assets/img/fox.png"
        (click)="fbs.toggleFox()"
        [infoText]="(fbs.getFox() | async) ? 'ofc på 1700' : 'Nah fam'"
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

  constructor(public fbs: FirebaseService) {}

  ngOnInit(): void {}

  shotsOnClick() {
    console.log('shotsOnClick');
  }

  mvpOnClick() {
    console.log('mvpOnClick');
  }
}
