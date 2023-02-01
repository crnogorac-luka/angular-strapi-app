import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormModule } from 'src/app/components/register-form/register-form.module';
import { AuthComponent } from './auth.component';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  entryComponents: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RegisterFormModule,
    LoginFormModule
  ],
  exports: [
    RegisterFormModule,
    LoginFormModule
  ]
})
export class AuthModule { }
