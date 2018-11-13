import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  
  confirmPurchase() {
    localStorage.setItem("ticketPurchased", "true");
    this.dismiss();
  }
        
  dismiss() {
    this.viewController.dismiss();
  }
  

}
