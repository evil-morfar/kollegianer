import { ContainerComponent } from './shared/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './frontpage/front-page/front-page.component'
import { ShoppingPageComponent } from './components/shopping-page.component'
import { AccountingPageComponent } from './components/accounting-page.component'
import { ChatPageComponent } from './components/chat-page.component'
import { SettingsPageComponent } from './components/settings-page.component'

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {path: '', component: FrontPageComponent},
      {path: 'shopping', component: ShoppingPageComponent},
      {path: 'accounting', component: AccountingPageComponent},
      {path: 'chat', component: ChatPageComponent},
    ],
  },
  {path: 'settings', component: SettingsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
