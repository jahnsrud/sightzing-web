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

  public emailOrUsername: any;
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
    this.checkInput();
  }

  changeToRegister() {
    let registerModal = this.modalCtrl.create(RegisterPage);
    registerModal.present();
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss(this.modalCtrl);
  }

  checkInput() {
    if(this.emailOrUsername.includes("@")){
      localStorage.setItem("emailInput", this.emailOrUsername);
      localStorage.setItem("Country", "China");
      localStorage.setItem("Username", "Your Username");
      } 
      else {
        localStorage.setItem("Username", this.emailOrUsername);
        localStorage.setItem("emailInput", "YourEmail@email.com");
        localStorage.setItem("Country", "China");
      }
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
