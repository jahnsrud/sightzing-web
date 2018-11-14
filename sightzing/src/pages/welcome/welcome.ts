import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController, public viewController: ViewController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  dismiss() {
    this.viewController.dismiss(this.modalController);
  }

  loginWithWeibo() {

    let toast = this.toastCtrl.create({
      message: "Bai Bao signed in 🇨🇳",
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

    this.viewController.dismiss(this.modalController);

  }
}
