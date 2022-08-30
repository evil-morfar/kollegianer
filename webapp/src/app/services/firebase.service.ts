import {ViMangler} from './../models/ViMangler';
import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom, lastValueFrom} from 'rxjs';
import {User} from '../models/User';

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
  private beerPong = new BehaviorSubject<boolean>(false);
  private partyMode = new BehaviorSubject<string>('');
  private fox = new BehaviorSubject<boolean>(false);

  private viMangler = new BehaviorSubject<ViMangler[]>([
    new ViMangler('1701', 'Test item', '16/7'),
  ]);

  private user = new BehaviorSubject<User>({
    beerAccount: {
      accountNr: '4022415269',
      beers: '3',
      ciders: '',
      cocios: '',
      consumption: '112,98',
      deadline: '30-08-2022',
      deposit: '',
      dept: '21,24',
      payed: '200,00',
      punishment: '0,00',
      regNr: '0400',
      sodas: '30',
      toPay: ' kr. -65,78 ',
    },
    birthday: '29/03/1992',
    duty: 'Regnskab',
    email: 'nnpilemand@gmail.com',
    keyphrase: 'gyldnedamer',
    kitchenAccount: {
      accountNr: '4022415242',
      bought: '0',
      deadline: '30-08-2022',
      deposit: '',
      dept: '-850,16',
      other: '',
      payed: '-200',
      punishment: '',
      punishmentBasis: '0,00',
      regNr: '0400',
      sharedExpense: '60,03',
      toPay: ' kr. -590,13 ',
    },
    kitchenweek: false,
    name: 'Nichlas N Pilemand',
    phone: '20441559',
    photo: 'https://graph.facebook.com/10218985346330280/picture',
    room: '1701',
    sheriff: false,
  });

  private users = new BehaviorSubject<User[]>([
    this.user.getValue(),
    {
      beerAccount: {
        accountNr: '4022415269',
        beers: '',
        ciders: '',
        cocios: '',
        consumption: '30,03',
        deadline: '30-08-2022',
        deposit: '',
        dept: '0,00',
        payed: '',
        punishment: '0,00',
        regNr: '0400',
        sodas: '9',
        toPay: ' kr. 30,04 ',
      },
      birthday: '22/03/2000',
      duty: 'Akvarie',
      email: 'madsfstenholt@gmail.com',
      keyphrase: 'gyldnedamer',
      kitchenAccount: {
        accountNr: '4022415242',
        bought: '0',
        deadline: '30-08-2022',
        deposit: '',
        dept: '55,03',
        other: '',
        payed: '55,03',
        punishment: '',
        punishmentBasis: '0,00',
        regNr: '0400',
        sharedExpense: '60,03',
        toPay: ' kr. 60,03 ',
      },
      kitchenweek: false,
      name: 'Mads Føns Stenholt',
      phone: '40283610',
      photo: 'https://graph.facebook.com/3023126131146601/picture',
      room: '1712',
      sheriff: false,
    },
    {
      beerAccount: {
        accountNr: '4022415269',
        beers: '15',
        ciders: '',
        cocios: '',
        consumption: '124,46',
        deadline: '30-08-2022',
        deposit: '-250,00',
        dept: '234,82',
        payed: '109,28',
        punishment: '0,00',
        regNr: '0400',
        sodas: '18',
        toPay: ' kr. -0,00 ',
      },
      birthday: '08/03/1995',
      duty: 'Regnskab',
      email: 'gyrosap@gmail.com',
      keyphrase: 'gyldnedamer',
      kitchenAccount: {
        accountNr: '4022415242',
        bought: '0',
        deadline: '30-08-2022',
        deposit: '-250',
        dept: '-15,22',
        other: '',
        payed: '125,54',
        punishment: '0',
        punishmentBasis: '0,00',
        regNr: '0400',
        sharedExpense: '60,03',
        toPay: ' kr. -330,74 ',
      },
      kitchenweek: false,
      name: 'Mr. Fjäms feat Hildibjørg etc..',

      phone: '28905145',
      room: '1706',
      sheriff: false,
    },
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
    this.beerPong.next(!this.beerPong.value);
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

  getUser() {
    return this.user.asObservable();
  }

  getUsers() {
    return firstValueFrom(this.users);
  }
}
