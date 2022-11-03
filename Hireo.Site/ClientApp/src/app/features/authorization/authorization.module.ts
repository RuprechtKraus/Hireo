import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthorizationRoutingModule, SharedModule],
})
export class AuthorizationModule {
  constructor() {
    console.log("AuthorizationModule");
  }
}
