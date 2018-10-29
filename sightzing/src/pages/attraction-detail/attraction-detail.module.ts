import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttractionDetailPage } from './attraction-detail';

@NgModule({
  declarations: [
    AttractionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AttractionDetailPage),
  ],
})
export class AttractionDetailPageModule {}
