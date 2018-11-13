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
    let loginBtn = document.getElementById("loginbtn");
    let registerBtn = document.getElementById("registerbtn");
    let profilePlaceHolder = document.getElementById("profilePlaceholder");

    profileGrid.setAttribute("style", "display: none;");
    loginGrid.setAttribute("style", "display: block;");
    loginBtn.setAttribute("style", "display: block;");
    registerBtn.setAttribute("style", "background-color: white;");
    registerBtn.setAttribute("style", "display: block;");
    profilePlaceHolder.setAttribute("style", "display: none;");
    this.isLoggedIn();


  }

  changeToRegister() {

    let profileGrid = document.getElementById("notloggedindiv");
    let registerGrid = document.getElementById("registerdiv");
    let loginBtn = document.getElementById("loginbtn");
    let registerBtn = document.getElementById("registerbtn");
    let profilePlaceHolder = document.getElementById("profilePlaceholder");

    profileGrid.setAttribute("style", "display: none;");
    registerGrid.setAttribute("style", "display: block;");
    loginBtn.setAttribute("style", "font-size: 200px;");
    loginBtn.setAttribute("style", "display: block;");
    registerBtn.setAttribute("style", "display: block;");
    profilePlaceHolder.setAttribute("style", "display: none;");

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

  changeToLoggedinUser() {

    let editPasswordGrid = document.getElementById("editpassworddiv");
    let editProfieGrid = document.getElementById("editprofilediv");
    let loggedinGrid = document.getElementById("loggedindiv");
    let loginGrid = document.getElementById("logindiv");
    let welcomeUserGrid = document.getElementById("welcomeuserdiv");
    let plusBtn = document.getElementById("plusbtn");
    let profilePlaceholder = document.getElementById("profilePlaceholder");
    let loginBtn = document.getElementById("loginbtn");
    let registerBtn = document.getElementById("registerbtn");

    document.getElementById("title").innerHTML="Profile";

    editPasswordGrid.setAttribute("style","display: none;");
    editProfieGrid.setAttribute("style","display: none;");
    profilePlaceholder.setAttribute("style","display: block;");
    loginGrid.setAttribute("style","display: none;");
    loggedinGrid.setAttribute("style", "display: block;");
    welcomeUserGrid.setAttribute("style","display: none");
    plusBtn.setAttribute("style","display: none;");
    loginBtn.setAttribute("style", "visibility: hidden;");
    registerBtn.setAttribute("style", "visibility: hidden;");    
  }

  signOut() {

    let editProfieGrid = document.getElementById("editprofilediv");
    let loggedinGrid = document.getElementById("loggedindiv");
    let profileGrid = document.getElementById("notloggedindiv");

    profileGrid.setAttribute("style","display: block");
    loggedinGrid.setAttribute("style", "display: none;");
    editProfieGrid.setAttribute("style","display: none;");
  }

  changeToEditProfile() {

    let plusBtn = document.getElementById("plusbtn");
    let profilePlaceholder = document.getElementById("profilePlaceholder");
    let editProfieGrid = document.getElementById("editprofilediv");
    let loggedinGrid = document.getElementById("loggedindiv");

    document.getElementById("title").innerHTML="Edit Profile";

    loggedinGrid.setAttribute("style","display: none;");
    editProfieGrid.setAttribute("style","display: block;");
    profilePlaceholder.setAttribute("style","display: block;");
    plusBtn.setAttribute("style","display: block;");
  }

  changeToEditPassword() {

    let editPasswordGrid = document.getElementById("editpassworddiv");
    let profilePlaceholder = document.getElementById("profilePlaceholder");
    let loggedinGrid = document.getElementById("loggedindiv");

    document.getElementById("title").innerHTML="Edit Password";

    editPasswordGrid.setAttribute("style","display: block;");
    loggedinGrid.setAttribute("style","display: none;");
    profilePlaceholder.setAttribute("style","display: none;");
  }

  isLoggedIn() {

    localStorage.getItem("loggedIn");
    localStorage.setItem("loggedIn", "true");
    return true;
  }

}
