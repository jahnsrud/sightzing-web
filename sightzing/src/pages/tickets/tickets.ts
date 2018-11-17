import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, Platform, AlertController } from 'ionic-angular';
import { TicketsBuyPage } from '../tickets-buy/tickets-buy';
import { ProfilePage } from '../profile/profile';


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
  @ViewChild(Content) content: Content;
  qrView:boolean = true;
  isPurchased:boolean = false;
  isAndroid = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public platform: Platform, public alertController: AlertController) {

  }

  ionViewDidLoad() {

    if (this.platform.is('ios')) {
      this.isAndroid = false;
    } else {
      this.isAndroid = true;
    }

    this.content.ionScrollStart.subscribe(() => {
      this.changeNavbarOnScroll();
    });
    this.content.ionScrollEnd.subscribe(() => {
      if(this.content.scrollTop == 0){
        this.changeNavbarToTransparent(); 
      }
    });
  }

  ionViewWillEnter() {
    this.checkTicketStatus();
  }

  ionViewDidEnter() {
    this.checkTicketStatus();
  }

  changeNavbarOnScroll(){
    let navbar = document.getElementById("navbar-tickets"); 
    navbar.style.backgroundColor = "white"; 
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
  }

  changeNavbarToTransparent(){
    let navbar = document.getElementById("navbar-tickets"); 
    navbar.style.backgroundColor = "transparent"; 
    navbar.style.boxShadow = "none"; 
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

  async presentProfile() {
    const modal = await this.modalController.create(ProfilePage);
    modal.present();
  }

  addPass() {
    let alert = this.alertController.create({
      title: 'Added to your Wallet',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

}
