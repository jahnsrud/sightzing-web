import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { formDirectiveProvider } from '@angular/forms/src/directives/reactive_directives/form_group_directive';

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

  welcomeUserForm: FormGroup;
  registerForm: FormGroup;
  public Email: any;
  public username: any;
  public country: any;
  url = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
  
    this.registerForm= formBuilder.group({
      'inputEmail': ['', Validators.compose([Validators.required])]
    });
    this.welcomeUserForm= formBuilder.group({
      'inputUsername': ['', Validators.compose([Validators.required])],
      'inputCountry': ['', Validators.compose([Validators.required])]
    });
  }

  getInputField() {
  let input = (<HTMLInputElement>document.getElementById('file'));
  return input;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  changeToLogin() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
    this.dismiss();
  }

  changeToLoggedinUser() {
    let loggedinModal = this.modalCtrl.create(ProfilePage);
    loggedinModal.present();
    this.dismiss();
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("Username", this.username);
    localStorage.setItem("Country", this.country);
    localStorage.setItem("imageUrl", this.url);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.modalCtrl);
  }

  changeToWelcomeUser() {

    let registerGrid = document.getElementById("registerdiv");
    let welcomeUserGrid = document.getElementById("welcomeuserdiv");
    let loginBtn = document.getElementById("loginbtn");
    let registerBtn = document.getElementById("registerbtn");
    let profilePlaceHolder = document.getElementById("profileplaceholder");
    let plusBtn = document.getElementById("plusbtn");
    let imgContainer = document.getElementById("profile-pic-container");

    document.getElementById("title").innerHTML="Welcome!";
    localStorage.setItem("emailInput", this.Email);

    registerGrid.setAttribute("style", "display: none;");
    welcomeUserGrid.setAttribute("style", "display: block;");
    loginBtn.setAttribute("style", "display: none;");
    registerBtn.setAttribute("style", "display: none;");
    profilePlaceHolder.setAttribute("style", "display: block;");
    plusBtn.setAttribute("style", "display: block");
    imgContainer.setAttribute("style", "display: block;");
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

moveFocus(event, nextElement) {
  if(event.key === "Enter"){
  nextElement.setFocus();
  }
}
}