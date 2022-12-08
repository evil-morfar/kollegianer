import { environment } from './../environments/environment';
import { FrontPageComponent } from './frontpage/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {
  AngularFireDatabaseModule,
  USE_EMULATOR as USE_DATABASE_EMULATOR,
} from '@angular/fire/compat/database';
import {
  AngularFireAuthModule,
  USE_DEVICE_LANGUAGE,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/compat/auth';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR as USE_FUNCTIONS_EMULATOR,
} from '@angular/fire/compat/functions';
// import {
//   AngularFireStorageModule,
//   USE_EMULATOR as USE_STORAGE_EMULATOR,
// } from '@angular/fire/compat/storage';
// import {
//   AngularFireMessagingModule,
//   SERVICE_WORKER,
//   VAPID_KEY,
// } from '@angular/fire/compat/messaging';
import {AngularFireAuthGuardModule} from '@angular/fire/compat/auth-guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TopBoxComponent } from './frontpage/top-box.component';
import { BottomBoxComponent } from './frontpage/bottom-box.component';
import { InfoBadgeComponent } from './components/info-badge.component';
import { ColoredInfoBadgeComponent } from './components/colored-info-badge.component';
import { ShoppingPageComponent } from './components/shopping-page.component';
import { AccountingPageComponent } from './components/accounting-page.component';
import { ChatPageComponent } from './components/chat-page.component';
import { SettingsPageComponent } from './components/settings-page.component';
import { AccountingHeaderComponent } from './components/accounting/accounting-header.component';
import { AccountingFooterComponent } from './components/accounting/accounting-footer.component';
import { AccountRendererComponent } from './components/accounting/account-renderer.component';
import { AccountingTotalsComponent } from './components/accounting/accounting-totals.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    TopBoxComponent,
    BottomBoxComponent,
    InfoBadgeComponent,
    ColoredInfoBadgeComponent,
    ShoppingPageComponent,
    AccountingPageComponent,
    ChatPageComponent,
    SettingsPageComponent,
    AccountingHeaderComponent,
    AccountingFooterComponent,
    AccountRendererComponent,
    AccountingTotalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators
        ? ['http://localhost:9099']
        : undefined,
    },
    {
      provide: USE_DATABASE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9000] : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5001] : undefined,
    },
    // {
    //   provide: USE_STORAGE_EMULATOR,
    //   useValue: environment.useEmulators ? ['localhost', 9199] : undefined,
    // },
    {provide: USE_DEVICE_LANGUAGE, useValue: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
