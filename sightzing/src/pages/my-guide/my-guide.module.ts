import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGuidePage } from './my-guide';

@NgModule({
  declarations: [
    MyGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(MyGuidePage),
  ],
})
export class MyGuidePageModule {}
