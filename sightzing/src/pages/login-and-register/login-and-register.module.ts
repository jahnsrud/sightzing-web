import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAndRegisterPage } from './login-and-register';

@NgModule({
  declarations: [
    LoginAndRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAndRegisterPage),
  ],
})
export class LoginAndRegisterPageModule {}
