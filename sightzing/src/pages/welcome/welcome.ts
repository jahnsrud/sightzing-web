import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

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
      position: 'top'
    });

    toast.present();
    localStorage.setItem("isLoggedin", "true");

    this.viewController.dismiss(this.modalController);

  }

  register() {
    let welcomeModal = this.modalController.create(RegisterPage);
    welcomeModal.present();
    this.dismiss();


  }
}
