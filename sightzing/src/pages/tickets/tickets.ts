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

  ionViewWillEnter() {
    this.checkTicketStatus();
  }

  ionViewDidEnter() {
    this.checkTicketStatus();
  }

  async buyTicket() {

    const modal = await this.modalController.create(TicketsBuyPage, null, {
      showBackdrop: true, 
      enableBackdropDismiss: true,
      cssClass:"purchase-modal"
    });

    modal.onDidDismiss(data => {
      this.checkTicketStatus();
    })

    modal.present();

  }

  betaDisablePurchase() {
    localStorage.setItem("ticketPurchased", "false");
    this.checkTicketStatus();

  }

  checkTicketStatus() {
    
    console.log(localStorage.getItem("ticketPurchased"));

    if (localStorage.getItem("ticketPurchased") == "true") {
      this.qrView = true;
    } else {
      this.qrView = false;
    }
    
  }

}
