import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { OtpPage } from './otp/otp.page';
import { SignupPage } from './signup/signup.page';
import { WelcomePage } from './welcome/welcome.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'WelcomePage',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'otp',
    component: OtpPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
