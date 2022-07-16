import { ViMangler } from './../models/ViMangler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private kitchenWeek = new BehaviorSubject<string>('Nichlas');
  private sherif = new BehaviorSubject<string>('Nichlas');
  private fishFeed = new BehaviorSubject<Date>(new Date());
  private birthday = new BehaviorSubject<{date: Date; person: string}>({
    date: new Date(),
    person: 'Nichlas',
  });
  private shots = new BehaviorSubject<string>('Nichlas');
  private mvp = new BehaviorSubject<string>('Nichlas');
  private beerPong = new BehaviorSubject<string>('');
  private partyMode = new BehaviorSubject<string>('');
  private fox = new BehaviorSubject<Boolean>(false);

  private viMangler = new BehaviorSubject<ViMangler[]>([
    new ViMangler('1701', 'Test item', '16/7'),
  ]);

  constructor() {}

  getKitchenWeek() {
    return this.kitchenWeek.asObservable();
  }

  getSherif() {
    return this.sherif.asObservable();
  }

  getFishFeed() {
    return this.fishFeed.asObservable();
  }

  getBirthday() {
    return this.birthday.asObservable();
  }

  getShots() {
    return this.shots.asObservable();
  }

  getMvp() {
    return this.mvp.asObservable();
  }

  getBeerPong() {
    return this.beerPong.asObservable();
  }
  getPartyMode() {
    return this.partyMode.asObservable();
  }
  getFox() {
    return this.fox.asObservable();
  }

  setKitchenWeek(kitchenWeek: string) {
    this.kitchenWeek.next(kitchenWeek);
  }

  setSherif(sherif: string) {
    this.sherif.next(sherif);
  }

  setFishFeed(fishFeed: Date) {
    this.fishFeed.next(fishFeed);
  }

  setBirthday(birthday: {date: Date; person: string}) {
    this.birthday.next(birthday);
  }
  setShots(shots: string) {
    this.shots.next(shots);
  }
  setMvp(mvp: string) {
    this.mvp.next(mvp);
  }
  toggleBeerPong() {
    this.beerPong.next(this.beerPong.getValue() == '' ? 'Nichlas' : '');
  }
  togglePartyMode() {
    this.partyMode.next(this.partyMode.getValue() == '' ? 'Nichlas' : '');
  }
  toggleFox() {
    this.fox.next(!this.fox.getValue());
  }

  addViMangler(viMangler: ViMangler) {
    const viManglerList = this.viMangler.getValue();
    viManglerList.push(viMangler);
    this.viMangler.next(viManglerList);
  }
  viManglerOnPurchase(index: number) {
    const viManglerList = this.viMangler.getValue();
    console.log(viManglerList);
    viManglerList[index].checked = !viManglerList[index].checked;
    this.viMangler.next(viManglerList);
  }

  removeViMangler(index: number) {
    const viManglerList = this.viMangler.getValue();
    viManglerList.splice(index, 1);
    this.viMangler.next(viManglerList);
  }

  getViMangler() {
    return this.viMangler.asObservable();
  }
}
