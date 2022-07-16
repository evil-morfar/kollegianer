import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, of, tap } from 'rxjs'

@Component({
  selector: 'app-top-box',
  template: `
    <app-info-badge
      imgPath="assets/img/køkkenuge.png"
      infoText="{{ kitchenWeek | async }}"
    ></app-info-badge>
    <app-info-badge
      imgPath="assets/img/sheriff.png"
      infoText="{{ sheriff | async }}"
    ></app-info-badge>
    <app-info-badge
      imgPath="assets/img/kollegianer.png"
      infoText=""
    ></app-info-badge>
    <app-info-badge
      imgPath="assets/img/fish.png"
      infoText="Sidst fodret {{
        (fish | async) | date: 'ccc dd MMM HH:mm'
      }}"
    ></app-info-badge>
    <app-info-badge
      imgPath="assets/img/birthday.png"
      infoText="{{ birthDayPerson | async }}"
    >
      <p>{{ (birthDayDate | async) | date: 'dd/MM/yyyy' }}</p>
    </app-info-badge>
  `,
  styles: [
    `
    :host
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      grid-template-rows: 32% 32% 32%
      grid-template-areas: "topLeft . topRight"". middle . ""bottomLeft . bottomRight"
      padding: 1rem
      :first-child
        grid-area: topLeft
      :nth-child(2)
        grid-area: topRight
      :nth-child(3)
        grid-area: middle
      :nth-child(4)
        grid-area: bottomLeft
      :nth-child(5)
        grid-area: bottomRight

  `,
  ],
})
export class TopBoxComponent implements OnInit {
  kitchenWeek!: Observable<string>;
  sheriff!: Observable<string>;
  fish!: Observable<Date>;
  birthDayPerson!: Observable<string>;
  birthDayDate!: Observable<Date>;

  constructor(private fbs: FirebaseService) {}

  ngOnInit(): void {
    this.kitchenWeek = this.fbs.getKitchenWeek();
    this.sheriff = this.fbs.getSherif();
    this.fish = this.fbs.getFishFeed();
    this.birthDayPerson = this.fbs.getBirthday().pipe(map(date => date.person));
    this.birthDayDate = this.fbs.getBirthday().pipe(map(date => date.date));
  }
}
