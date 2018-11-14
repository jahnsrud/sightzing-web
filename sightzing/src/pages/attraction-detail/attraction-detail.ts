import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Label } from 'ionic-angular';
import { Attraction } from '../../app/attraction/attraction';

@IonicPage()
@Component({
  selector: 'page-attraction-detail',
  templateUrl: 'attraction-detail.html',
})
export class AttractionDetailPage {

  attraction:Attraction;

  title: string;
  description: string;
  imageUrl: string;
  time: number;
  rating: number;
  price: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
  }

  fillAmneties(){
    let amnetyList: string[] = new Array();

    let scrollBar = document.getElementById("main-scroller-box"); 

    //scrollBar.innerHTML = "";

    //for(let i = 0; i < amnetyList.length; i++){
    //  scrollBar.append(amnetyList[i]);
    //}
  }

  fillPrice(){
    let priceSigns = document.getElementsByClassName("price-sign");

    for(let i = this.price; i < priceSigns.length; i++){
      priceSigns[i].setAttribute("style", "color: #b7b7b7;");
    }
  }

  fillStars(){
    let stars = document.getElementsByClassName("star-icon");
    let starsCounter = this.rating;
    let indexCounter = 0;

    for(let i = 0; i < this.rating; i++){
      if(starsCounter > 0 && starsCounter < 1){
        stars[indexCounter].setAttribute("name", "star-half");
        stars[indexCounter].setAttribute("class", "star-icon icon icon-md ion-md-star-half");
        stars[indexCounter].setAttribute("aria-label", "star half");
      }
      if(starsCounter >= 1){
        stars[i].setAttribute("name", "star");
        stars[i].setAttribute("class", "star-icon icon icon-md ion-md-star");
        stars[i].setAttribute("aria-label", "star");
        starsCounter--;
        indexCounter++;
      }
    }
  }

}
