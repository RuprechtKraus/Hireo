import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SettingsHeaderComponent } from '../settings-header/settings-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SettingsLayoutComponent,
    MainHeaderComponent,
    SettingsHeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
