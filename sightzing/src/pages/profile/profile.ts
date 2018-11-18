import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  url = '';
  editProfileForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public modalController: ModalController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder) {
    this.Username= localStorage.getItem("Username");
    this.Country= localStorage.getItem("Country");
    this.emailInput= localStorage.getItem("emailInput");
    this.url= localStorage.getItem("imageUrl");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.checkLoggedinStatus();
    this.setUsernameEmailAndCountry();
    this.setProfilePic();
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

    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("Username", "Bai Bao");
    localStorage.setItem("emailInput", "Bai.Bao@online.no");
    localStorage.setItem("Country", "China");

    toast.present();

    this.viewController.dismiss(this.modalController);

  }

  setProfilePic() {
    document.getElementById("profileplaceholder").setAttribute("src", localStorage.getItem("imageUrl"));
  }
  
  setUsernameEmailAndCountry() {
    if(localStorage.getItem("emailInput")!= ""){
    document.getElementById("email").innerHTML= localStorage.getItem("emailInput");
    } else {
      document.getElementById("email").setAttribute("style", "display: none;");
    }
    if(localStorage.getItem("Username")!= ""){
    document.getElementById("username").innerHTML= localStorage.getItem("Username");
    } else {
      document.getElementById("username").setAttribute("style", "display: none;");
    }
    if(localStorage.getItem("Country")!= ""){
    document.getElementById("country").innerHTML= localStorage.getItem("Country");
    } else {
      document.getElementById("country").setAttribute("style", "display: none;");
    }
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
    let profilePlaceholder = document.getElementById("profileplaceholder");

    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("imageUrl", this.url);
    this.setProfilePic();

    document.getElementById("title").innerHTML="Profile";
    localStorage.setItem("emailInput",this.emailInput);
    localStorage.setItem("Username", this.Username);
    localStorage.setItem("Country", this.Country);
    this.setUsernameEmailAndCountry();

    editPasswordGrid.setAttribute("style","display: none;");
    editProfileGrid.setAttribute("style","display: none;");
    profilePlaceholder.setAttribute("style","display: block;");
    loggedinGrid.setAttribute("style", "display: block;");
    plusBtn.setAttribute("style","display: none;");
  }

  changeToLoggedinUserFromEditPassword() {

    let editPasswordGrid = document.getElementById("editpassworddiv");
    let loggedinGrid = document.getElementById("loggedindiv");

    document.getElementById("title").innerHTML="Profile";

    this.Username= localStorage.getItem("Username");
    this.Country= localStorage.getItem("Country");
    this.emailInput= localStorage.getItem("emailInput");

    editPasswordGrid.setAttribute("style", "display: none;");
    loggedinGrid.setAttribute("style", "display: block;");
  }

  signOut() {

    let editProfieGrid = document.getElementById("editprofilediv");
    let loggedinGrid = document.getElementById("loggedindiv");
    let profileGrid = document.getElementById("notloggedindiv");
    let plusBtn = document.getElementById("plusbtn");

    document.getElementById("title").innerHTML="Profile";
    localStorage.setItem("isLoggedin", "false");
    this.setUsernameEmailAndCountry();
    this.setProfilePic();

    plusBtn.setAttribute("style", "display: none;");
    profileGrid.setAttribute("style","display: block");
    loggedinGrid.setAttribute("style", "display: none;");
    editProfieGrid.setAttribute("style","display: none;");
  }

  changeToEditProfile() {

    let plusBtn = document.getElementById("plusbtn");
    let profilePlaceholder = document.getElementById("profileplaceholder");
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
    let profilePlaceholder = document.getElementById("profileplaceholder");
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

  checkUserInput() {

  }

  presentActionSheet() {

  let actionSheet = this.actionSheetCtrl.create({
    title: 'Are you sure you want to sign out?',
    buttons: [
      {
        text: 'Sign out',
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
          text: 'delete my Profile',
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

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}
}
