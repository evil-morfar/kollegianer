import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import da from "../../../../../locales/da.json";
import en from "../../../../../locales/en.json";
import { I18nPipe } from '../pipes/i18n.pipe';

/**
 * Note: It seemed easy to do it like this rather than converting existing locales
 * to work with Angular's localization.
 *
 * This also includes a pipe for easy translation in templates {@link I18nPipe}.
 */

@Injectable()
export class I18nService {

  language = new BehaviorSubject("en")

  constructor() {}

  public get(key: string): string {
    const lang = this.language.value === "da" ? da : en;
    const keys = key.split(".");

    // Hacky way of enabling TS to access our object with any string
    const a = keys[0] as keyof typeof lang;
    const c = lang[a]
    const b = keys[1] as keyof typeof c;

    return lang[a][b] ?? "TRANSLATION_MISSING";
  }
}

