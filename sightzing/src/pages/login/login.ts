import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    (<HTMLInputElement> document.getElementById("loginbtn")).disabled = true;
  }

  changeToLoggedinUser() {
    let loggedinModal = this.modalCtrl.create(ProfilePage);
    loggedinModal.present();
    this.dismiss();
    localStorage.setItem("isLoggedin", "true");
  }

  changeToRegister() {
    let registerModal = this.modalCtrl.create(RegisterPage);
    registerModal.present();
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss(this.modalCtrl);
  }

  loginWithWeibo() {

    let toast = this.toastCtrl.create({
      message: "Bai Bao signed in 🇨🇳",
      duration: 3000,
      position: 'bottom'
    });
    localStorage.setItem("isLoggedin", "true");
    toast.present();
    this.dismiss();
  }
}
