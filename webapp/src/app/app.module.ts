import { FrontPageComponent } from './frontpage/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
