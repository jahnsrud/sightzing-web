import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public modalController: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.checkLoggedinStatus();
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

    localStorage.setItem("isLoggedin", "true");

    toast.present();

    this.viewController.dismiss(this.modalController);

  }
  

  changeToLogin() {
    let loginModal = this.modalController.create(LoginPage);
    loginModal.present();
    this.dismiss();
  }

  changeToRegister() {
    let registerModal = this.modalController.create(RegisterPage);
    registerModal.present();
    this.dismiss();
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

    localStorage.setItem("isLoggedin", "true");

    this.checkLoginStatus();

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
    let plusBtn = document.getElementById("plusbtn");

    document.getElementById("title").innerHTML="Profile";
    localStorage.setItem("isLoggedin", "false");

    plusBtn.setAttribute("style", "display: none;");
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

  registrationIsActive() {
    (<HTMLInputElement> document.getElementById("registerbtn")).disabled = true;
    (<HTMLInputElement> document.getElementById("loginbtn")).disabled = false;

  }

  loginIsActive() {

    (<HTMLInputElement> document.getElementById("loginbtn")).disabled = true;
    (<HTMLInputElement> document.getElementById("registerbtn")).disabled = false;
  }

  checkLoggedinStatus() {

    if(localStorage.getItem("isLoggedin")== "true") {
      document.getElementById("notloggedindiv").setAttribute("style","display: none;");
      document.getElementById("loggedindiv").setAttribute("style","display: block;");
    } else {
      document.getElementById("loggedindiv").setAttribute("style", "display: none;");
      document.getElementById("notloggedindiv").setAttribute("style","display: block;");
    }
  }

}
