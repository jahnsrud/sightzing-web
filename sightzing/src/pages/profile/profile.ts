import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  dismiss() {
    this.viewController.dismiss(this.modalController);
  }

  changeToLogin() {

    let loginGrid = document.getElementById("logindiv");
    let profileGrid = document.getElementById("notloggedindiv");
    let loginText = document.getElementById("logintext");
    let registerText = document.getElementById("registertext");

    profileGrid.setAttribute("style", "display: none;");
    loginGrid.setAttribute("style", "display: block;");
    loginText.setAttribute("style", "visibility: visible;");
    registerText.setAttribute("style", "visibility: visible;");


  }

  changeToRegister() {

    let profileGrid = document.getElementById("notloggedindiv");
    let registerGrid = document.getElementById("registerdiv");
    let loginText = document.getElementById("logintext");
    let registerText = document.getElementById("registertext");

    profileGrid.setAttribute("style", "display: none;");
    registerGrid.setAttribute("style", "display: block;");
    loginText.setAttribute("style", "visibility: visible;");
    registerText.setAttribute("style", "visibility: visible;");

  }

}
