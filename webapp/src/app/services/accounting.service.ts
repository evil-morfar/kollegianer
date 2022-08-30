import {map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {parse} from 'csv-parse/browser/esm/sync';

import {I18nService} from './../shared/services/i18n.service';
import {FirebaseService} from './firebase.service';
import {KeyValue} from '../models/KeyValue';
import {TopScore} from '../models/TopScore';

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  constructor(private firebase: FirebaseService, private i18n: I18nService) {}

  /**
   * Converts a string to a float if it's non empty. Also replaces ',' with '.'.
   */
  private maybeToFloat(val: string) {
    return val !== '' ? parseFloat(val.replace(',', '.')) : val;
  }

  private modifyToPay(val: string) {
    return val.replace(' kr. ', '');
  }

  getKitchenAccountNumber() {
    return this.firebase.getUser().pipe(
      map(user => ({
        reg: user.kitchenAccount['regNr'] || '',
        account: user.kitchenAccount['accountNr'] || '',
      })),
    );
  }

  getBeerAccountNumber() {
    return this.firebase.getUser().pipe(
      map(user => ({
        reg: user.beerAccount['regNr'] || '',
        account: user.beerAccount['accountNr'] || '',
      })),
    );
  }

  getUserKitchenAccount(): Observable<KeyValue[]> {
    // get uid
    return this.firebase.getUser().pipe(
      map(user => {
        // Reformat the data
        const a = user.kitchenAccount;

        return [
          [this.i18n.get('accounting.status'), ''],
          [this.i18n.get('accounting.bought'), this.maybeToFloat(a['bought'])],
          [
            this.i18n.get('accounting.shared_expenses'),
            this.maybeToFloat(a['sharedExpense']),
          ],
          [this.i18n.get('accounting.dept'), this.maybeToFloat(a['dept'])],
          [this.i18n.get('accounting.payed'), this.maybeToFloat(a['payed'])],
          [
            this.i18n.get('accounting.punishment_basis'),
            this.maybeToFloat(a['punishmentBasis']),
          ],
          [
            this.i18n.get('accounting.punishment'),
            this.maybeToFloat(a['punishment']),
          ],
          [
            this.i18n.get('accounting.deposit'),
            this.maybeToFloat(a['deposit']),
          ],
          [this.i18n.get('accounting.other'), this.maybeToFloat(a['other'])],
          [this.i18n.get('accounting.current'), ''],
          [this.i18n.get('accounting.deadline'), a['deadline']],
          [
            this.i18n.get('accounting.to_pay'),
            this.maybeToFloat(this.modifyToPay(a['toPay'])),
          ],
        ];
      }),
    );
  }

  getUserBeerAccount(): Observable<KeyValue[]> {
    // get uid return this.firebase.getUser().pipe(
    return this.firebase.getUser().pipe(
      map(user => {
        // Reformat the data
        const a = user.beerAccount;

        return [
          [this.i18n.get('accounting.consumption'), ''],
          [this.i18n.get('accounting.beer'), a['beers'] || '0'],
          [this.i18n.get('accounting.soda'), a['sodas'] || '0'],
          [this.i18n.get('accounting.cider'), a['ciders'] || '0'],
          // Keep as string to avoid rendering this as currency
          [
            this.i18n.get('accounting.with_all'),
            (+a['beers'] + +a['sodas'] + +a['ciders']).toString(),
          ],
          [this.i18n.get('accounting.status'), ''],
          [
            this.i18n.get('accounting.punishment'),
            this.maybeToFloat(a['punishment']),
          ],
          [
            this.i18n.get('accounting.deposit'),
            this.maybeToFloat(a['deposit']),
          ],
          [this.i18n.get('accounting.dept'), this.maybeToFloat(a['dept'])],
          [this.i18n.get('accounting.payed'), this.maybeToFloat(a['payed'])],
          [this.i18n.get('accounting.current'), ''],
          [this.i18n.get('accounting.deadline'), a['deadline']],
          [
            this.i18n.get('accounting.to_pay'),
            this.maybeToFloat(this.modifyToPay(a['toPay'])),
          ],
        ];
      }),
    );
  }

  /**
   * Fetches top 3 for each category of "beer", "soda", "cider" and "total"
   */
  async getTopScorers() {
    const users = await this.firebase.getUsers();
    const beer: TopScore = [];
    const soda: TopScore = [];
    const cider: TopScore = [];
    const total: TopScore = [];

    users.forEach(user => {
      beer.push({user: user.name, num: +user.beerAccount['beers']});
      soda.push({user: user.name, num: +user.beerAccount['sodas']});
      cider.push({user: user.name, num: +user.beerAccount['ciders']});
      total.push({
        user: user.name,
        num:
          +user.beerAccount['beers'] +
          +user.beerAccount['sodas'] +
          +user.beerAccount['ciders'],
      });
    });

    beer.sort((a, b) => b.num - a.num);
    soda.sort((a, b) => b.num - a.num);
    cider.sort((a, b) => b.num - a.num);
    total.sort((a, b) => b.num - a.num);

    const ret = {
      beer: beer.slice(0, 3),
      soda: soda.slice(0, 3),
      cider: cider.slice(0, 3),
      total: total.slice(0, 3),
    };
    return ret;
  }

  async uploadFile(file: File, isKitchen = false) {
    this.checkFileType(file);

    // Our "csv" is danish (i.e ";" seperated, and "," for decimal point, so convert those)
    const text = (await file.text()).replace(/,/g, ".").replace(/;/g, ",");
    const parsed = isKitchen ? this.parseKitchenAccount(text) : this.parseBeerAccount(text)
    // TODO Uplaod to firebase
  }

  private parseKitchenAccount(csvText: string) {
    // Check a keyword to determine that it's actually a kitchenaccount file we're handling
    if (csvText.search("Dato,Indkøber") < 0) throw new Error("File isn't kitchen account? (Couldn't find phrase: 'Dato;Indkøber')")

    const regNr = this.extractRegNum(csvText);
    const accountNr = this.extractAccountNum(csvText)
    const deadline = this.extractDeadline(csvText)

    const records = parse(csvText, {
      columns: ["værelse","fælles udgift", "", "andet", "indkøbt", "gammel gæld", "betalt" , "depositum", "straf grundlag", "straf" , "at betale"],
      skip_empty_lines: true,
      relax_column_count: true,
      cast: (value, context) => value.toLowerCase()
    });

  const res: {room: number, sharedExpense: string, other: string, bought: string, dept: string, payed: string, deposit: string, punishmentBasis: string, punishment: string, toPay: string, regNr: string, accountNr: string, deadline: string }[] = []

  records.forEach((element: { [x: string]: any; værelse: string | number; andet: any; indkøbt: any; betalt: any; depositum: any; straf: any;}) => {
    const room = +element?.værelse
    if (room >= 1701 && room <= 1714) {
      res.push({
        room: room,
        sharedExpense: element["fælles udgift"],
        other: element?.andet,
        bought: element?.indkøbt,
        dept: element["gammel gæld"],
        payed: element?.betalt,
        deposit: element?.depositum,
        punishmentBasis: element["straf grundlag"],
        punishment: element?.straf,
        toPay: element["at betale"],
        regNr,
        accountNr,
        deadline
      })
    }})
    return res
  }

  private parseBeerAccount (csvText: string) {
    // Check a keyword to determine that it's actually a beeraccount file we're handling
    if (csvText.search("Gammel Beholdning") < 0) throw new Error("File isn't beer account? (Couldn't find phrase 'Gammel Beholdning')")

    const regNr = this.extractRegNum(csvText);
    const accountNr = this.extractAccountNum(csvText)
    const deadline = this.extractDeadline(csvText)

    const records = parse(csvText, {
      columns: ["værelse","øl","sodavand","somersby","cocio","forbrug","gammel gæld","depositum","indbetalt","straf", "at betale","straf"],
      skip_empty_lines: true,
      relax_column_count: true,
      cast: (value, context) => value.toLowerCase()
    });

  const res: { room: number; beer: string | number; soda: string | number; cider: string | number; cocio: string | number; consumption: string | number; dept: any; deposit: string | number; payed: string | number; punishment: string | number; toPay: any, regNr: string, accountNr: string,  deadline: string }[]= []

  records.forEach((element: { [x: string]: any; værelse: string | number; øl: any; sodavand: any; somersby: any; cocio: any; forbrug: any; depositum: any; indbetalt: any; straf: any }) => {
    const room = +element?.værelse
    if (room >= 1701 && room <= 1714) {
      res.push({
        room: room,
        beer: element?.øl,
        soda: element?.sodavand,
        cider: element?.somersby,
        cocio: element?.cocio,
        consumption: element?.forbrug,
        dept: element["gammel gæld"],
        deposit: element?.depositum,
        payed: element?.indbetalt,
        punishment: element?.straf,
        toPay: element["at betale"],
        regNr,
        accountNr,
        deadline
      })
    }})
    return res
  }

  private extractRegNum(csvText: string) {
    const index = csvText.search(/Reg nr/)
    if (!index) throw new Error("Couldn't find 'reg nr' in file!")
    return csvText.slice(index + 8, index + 12)
  }

  private extractAccountNum(csvText: string) {
    const res = csvText.match(/Konto nr[:.,;]*(\d+)/i)
    if (!res?.[1]) throw new Error("Couldnt find 'konto nr' in file!")
    return res?.[1];
  }

  private extractDeadline(csvText: string) {
    const res = csvText.match(/Deadline[:,;]*([\d\-]+)/i)
    if (!res?.[1]) throw new Error("Couldnt find 'Deadline' in file!")
    return res?.[1];
  }

  private checkFileType(file: File) {
    // Only allow csv files
    if (
      !(file.type === 'text/csv' || file.type === 'text/comma-separated-values')
    ) {
      throw new Error('File type not supported');
    }
  }
}
