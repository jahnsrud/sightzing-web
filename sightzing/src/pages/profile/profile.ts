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
    let profilePlaceHolder = document.getElementById("profilePlaceholder");

    profileGrid.setAttribute("style", "display: none;");
    loginGrid.setAttribute("style", "display: block;");
    loginText.setAttribute("style", "visibility: visible;");
    registerText.setAttribute("style", "visibility: visible;");
    profilePlaceHolder.setAttribute("style", "display: none;");
    this.isLoggedIn();


  }

  changeToRegister() {

    let profileGrid = document.getElementById("notloggedindiv");
    let registerGrid = document.getElementById("registerdiv");
    let loginText = document.getElementById("logintext");
    let registerText = document.getElementById("registertext");
    let profilePlaceHolder = document.getElementById("profilePlaceholder");

    profileGrid.setAttribute("style", "display: none;");
    registerGrid.setAttribute("style", "display: block;");
    loginText.setAttribute("style", "visibility: visible;");
    registerText.setAttribute("style", "visibility: visible;");
    profilePlaceHolder.setAttribute("style", "display: none;");

  }

  changeToWelcomeUser() {

    let registerGrid = document.getElementById("registerdiv");
    let welcomeUserGrid = document.getElementById("welcomeuserdiv");
    let loginText = document.getElementById("logintext");
    let registerText = document.getElementById("registertext");
    let profilePlaceHolder = document.getElementById("profilePlaceholder");
    let plusBtn = document.getElementById("plusbtn");
    
    document.getElementById("title").innerHTML="Welcome!";

    registerGrid.setAttribute("style", "display: none;");
    welcomeUserGrid.setAttribute("style", "display: block;");
    loginText.setAttribute("style", "visibility: hidden;");
    registerText.setAttribute("style", "visibility: hidden;");
    profilePlaceHolder.setAttribute("style", "display: block;");
    plusBtn.setAttribute("style", "display: block");
  }

  changeToLoggedinUser() {

    let loggedinGrid = document.getElementById("loggedindiv");
    let loginGrid = document.getElementById("logindiv");
    let welcomeUserGrid = document.getElementById("welcomeuserdiv");
    let plusBtn = document.getElementById("plusbtn");
    let profilePlaceholder = document.getElementById("profilePlaceholder");
    let loginText = document.getElementById("logintext");
    let registerText = document.getElementById("registertext");

    document.getElementById("title").innerHTML="Profile";


    profilePlaceholder.setAttribute("style","display: block;");
    loginGrid.setAttribute("style","display: none;");
    loggedinGrid.setAttribute("style", "display: block;");
    welcomeUserGrid.setAttribute("style","display: none");
    plusBtn.setAttribute("style","display: none;");
    loginText.setAttribute("style", "visibility: hidden;");
    registerText.setAttribute("style", "visibility: hidden;");

    
  }

  isLoggedIn() {

    localStorage.getItem("loggedIn");
    localStorage.setItem("loggedIn", "true");
    return true;
  }

}
