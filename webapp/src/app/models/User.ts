export type User = {
  beerAccount: {[key: string]: string};
  birthday?: string;
  duty?: string;
  email?: string;
  keyphrase?: string;
  kitchenAccount: {[key: string]: string};
  kitchenweek: boolean;
  name: string;
  photo?: string;
  room: string;
  phone?: string;
  sheriff: boolean;
}
