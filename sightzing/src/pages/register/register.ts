import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  changeToLogin() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss(this.modalCtrl);
  }

  changeToWelcomeUser() {

    let registerGrid = document.getElementById("registerdiv");
    let welcomeUserGrid = document.getElementById("welcomeuserdiv");
    let loginBtn = document.getElementById("loginbtn");
    let registerBtn = document.getElementById("registerbtn");
    let profilePlaceHolder = document.getElementById("profilePlaceholder");
    let plusBtn = document.getElementById("plusbtn");
    
    document.getElementById("title").innerHTML="Welcome!";

    registerGrid.setAttribute("style", "display: none;");
    welcomeUserGrid.setAttribute("style", "display: block;");
    loginBtn.setAttribute("style", "visibility: hidden;");
    registerBtn.setAttribute("style", "visibility: hidden;");
    profilePlaceHolder.setAttribute("style", "display: block;");
    plusBtn.setAttribute("style", "display: block");
  }

}
