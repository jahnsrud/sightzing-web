import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the LoginAndRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-and-register',
  templateUrl: 'login-and-register.html',
})
export class LoginAndRegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginAndRegisterPage');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.modalCtrl);
  }

  changeToRegister() {

    let loginGrid = document.getElementById("logindiv");
    let registerGrid = document.getElementById("registerdiv");

    registerGrid.setAttribute("style", "display: block;");
    loginGrid.setAttribute("style", "display: none;");
  }

  changeToLogin() {

    let loginGrid = document.getElementById("logindiv");
    let registerGrid = document.getElementById("registerdiv");

    registerGrid.setAttribute("style", "display: none;");
    loginGrid.setAttribute("style", "display: block;");
  }

}
