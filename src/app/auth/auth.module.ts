import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { WelcomePage } from './welcome/welcome.page';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { OtpPage } from './otp/otp.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WelcomePage, LoginPage, SignupPage, OtpPage],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
