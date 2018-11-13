import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsBuyPage } from './tickets-buy';

@NgModule({
  declarations: [
    TicketsBuyPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsBuyPage),
  ],
})
export class TicketsBuyPageModule {}
