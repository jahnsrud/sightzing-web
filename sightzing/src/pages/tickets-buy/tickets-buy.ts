import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TicketsPage } from '../tickets/tickets';

/**
 * Generated class for the TicketsBuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets-buy',
  templateUrl: 'tickets-buy.html',
})
export class TicketsBuyPage {

  shouldViewFaceId:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  
  confirmPurchase() {
    this.shouldViewFaceId = true;
    localStorage.setItem("ticketPurchased", "true");

    setTimeout(() => {
      this.dismiss();
    }, 6400);

    // this.dismiss();
  }
        
  dismiss() {
    this.viewController.dismiss();
  }
  

}
