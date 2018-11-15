import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController, ActionSheetController } from 'ionic-angular';
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

  public Username: any;
  public Country: any;
  public emailInput: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public modalController: ModalController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.checkLoggedinStatus();
    this.setUsernameEmailAndCountry();
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
  
  setUsernameEmailAndCountry() {

    document.getElementById("email").innerHTML= localStorage.getItem("emailInput");
    document.getElementById("username").innerHTML= localStorage.getItem("Username");
    document.getElementById("country").innerHTML= localStorage.getItem("Country");
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

  changeToLoggedinUser() {

    let editPasswordGrid = document.getElementById("editpassworddiv");
    let editProfileGrid = document.getElementById("editprofilediv");
    let loggedinGrid = document.getElementById("loggedindiv");
    let plusBtn = document.getElementById("plusbtn");
    let profilePlaceholder = document.getElementById("profilePlaceholder");

    localStorage.setItem("isLoggedin", "true");

    document.getElementById("title").innerHTML="Profile";
    localStorage.setItem("emailInput",this.emailInput);
    localStorage.setItem("Username", this.Username);
    localStorage.setItem("Country", this.Country);
    
    editPasswordGrid.setAttribute("style","display: none;");
    editProfileGrid.setAttribute("style","display: none;");
    profilePlaceholder.setAttribute("style","display: block;");
    loggedinGrid.setAttribute("style", "display: block;");
    plusBtn.setAttribute("style","display: none;");
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

  checkLoggedinStatus() {

    if(localStorage.getItem("isLoggedin")== "true") {
      document.getElementById("notloggedindiv").setAttribute("style","display: none;");
      document.getElementById("loggedindiv").setAttribute("style","display: block;");
    } else {
      document.getElementById("loggedindiv").setAttribute("style", "display: none;");
      document.getElementById("notloggedindiv").setAttribute("style","display: block;");
    }
  }

  presentActionSheet() {

  let actionSheet = this.actionSheetCtrl.create({
    title: 'Are you sure you want to sign out?',
    buttons: [
      {
        text: 'Yes',
        role: 'destructive',
        handler: () => {
          this.signOut();
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      }
    ]
  });
    actionSheet.present();
  }

  presentDeleteProfileActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to delete your profile?',
      buttons: [
        {
          text: 'Yes, delete my Profile',
          role: 'destructive',
          handler: () => {
            this.signOut();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}
