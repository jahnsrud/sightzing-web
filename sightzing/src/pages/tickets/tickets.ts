import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TicketsBuyPage } from '../tickets-buy/tickets-buy';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  qrView:boolean = true;
  isPurchased:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

  async buyTicket() {

    const modal = await this.modalController.create(TicketsBuyPage);
    modal.present();

    this.qrView = !this.qrView;
    localStorage.setItem("ticketPurchased", "true");

  }

  checkTicketStatus() {
    localStorage.getItem("ticketPurchased");
  }

}
