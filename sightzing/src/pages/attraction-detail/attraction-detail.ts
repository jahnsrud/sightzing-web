import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController, ToastController } from 'ionic-angular';
import { Attraction } from '../../app/attraction/attraction';
import { TourList } from '../../app/tour/tourlist';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-attraction-detail',
  templateUrl: 'attraction-detail.html',
})
export class AttractionDetailPage {
  @ViewChild(Content) content: Content;
  attraction: Attraction;

  title: string;
  description: string;
  imageUrl: string;
  time: number;
  rating: number;
  price: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public mainTourList: TourList, public toastController:ToastController) {

    this.attraction = this.navParams.get("attraction");
    this.title = this.attraction.title;
    this.description = this.attraction.description;
    this.imageUrl = this.attraction.imageUrl;
    this.time = this.attraction.time;
    this.rating = this.attraction.rating;
    this.price = this.attraction.price;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionDetailPage');
    this.fillPrice();
    this.fillStars();
    this.fillAmneties();
    this.content.ionScrollStart.subscribe(() => {
      this.changeNavbarOnScroll();
    });
    this.content.ionScrollEnd.subscribe(() => {
      if (this.content.scrollTop == 0) {
        this.changeNavbarToTransparent();
      }
    });
  }


  changeNavbarOnScroll() {
    let navbar = document.getElementById("navbar-attraction");
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
    let backButtons = document.getElementsByClassName("back-button-icon");
    for (let i = 0; i < backButtons.length; i++) {
      backButtons[i].setAttribute("style", "color: black;")
    }
  }

  changeNavbarToTransparent() {
    let navbar = document.getElementById("navbar-attraction");
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
    let backButtons = document.getElementsByClassName("back-button-icon");
    for (let i = 0; i < backButtons.length; i++) {
      backButtons[i].setAttribute("style", "color: white;")
    }
  }

  fillAmneties() {
    let amnetyList: string[] = new Array();

    let scrollBar = document.getElementById("main-scroller-box");

    //scrollBar.innerHTML = "";

    //for(let i = 0; i < amnetyList.length; i++){
    //  scrollBar.append(amnetyList[i]);
    //}
  }

  fillPrice() {
    let priceSigns = document.getElementsByClassName("price-sign");

    for (let i = this.price; i < priceSigns.length; i++) {
      priceSigns[i].setAttribute("style", "color: #b7b7b7;");
    }
  }

  fillStars() {
    let stars = document.getElementsByClassName("star-icon");
    let starsCounter = this.rating;
    let indexCounter = 0;

    for (let i = 0; i < this.rating; i++) {
      if (starsCounter > 0 && starsCounter < 1) {
        stars[indexCounter].setAttribute("name", "star-half");
        stars[indexCounter].setAttribute("class", "star-icon icon icon-md ion-md-star-half");
        stars[indexCounter].setAttribute("aria-label", "star half");
      }
      if (starsCounter >= 1) {
        stars[i].setAttribute("name", "star");
        stars[i].setAttribute("class", "star-icon icon icon-md ion-md-star");
        stars[i].setAttribute("aria-label", "star");
        starsCounter--;
        indexCounter++;
      }
    }
  }

  openMap() {
    this.navCtrl.push(MapPage);

  }

  readFullGuide() {
    let alert = this.alertController.create({
      title: "Not available",
      subTitle: "Reading the full guide is not available in this version of Sightzing. Check back later 😎",
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  addAttraction() {
    this.mainTourList.addAttractionToList(this.attraction);

    let toast = this.toastController.create({
      message: '✅ Added ' + this.attraction.title,
      duration: 3000,
      position: 'top'
    });

    toast.present();

  }

}
