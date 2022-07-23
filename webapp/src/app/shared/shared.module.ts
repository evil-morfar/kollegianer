import { I18nPipe } from './pipes/i18n.pipe';
import { I18nService } from './services/i18n.service';
import { BasicDialogComponent } from './components/basic-dialog.component';
import { TextFieldModule } from '@angular/cdk/text-field'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatRippleModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component'
import { TopMenuComponent } from './top-menu/top-menu.component'
import { ContainerComponent } from './container/container.component'
import { LongPressDirective } from './directives/long-press.directive'


@NgModule({
  declarations: [
    BottomMenuComponent,
    ContainerComponent,
    TopMenuComponent,
    LongPressDirective,
    BasicDialogComponent,
    I18nPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    // SimplebarAngularModule,

    // Shared Angular Materials modules
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatToolbarModule,
    MatSelectModule,
    TextFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,

    // Shared Angular Materials modules
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatToolbarModule,
    MatSelectModule,
    TextFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDialogModule,

    BottomMenuComponent,
    ContainerComponent,
    TopMenuComponent,
    LongPressDirective,
    I18nPipe
  ],

  providers: [ I18nService ],
})
export class SharedModule {}
