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
  }


  fillPrice(){
    let priceSigns = document.getElementsByClassName("price-sign");

    for(let i = this.price; i < priceSigns.length; i++){
      priceSigns[i].setAttribute("style", "color: gray;");
    }
  }

  fillStars(){
    let stars = document.getElementsByClassName("star-icon"); 
    let starsCounter = this.rating; 
    let indexCounter = 0;

    for(let i = 0; i < this.rating; i++){
      stars[i].setAttribute("name", "star");
      stars[i].setAttribute("class", "star-icon icon icon-md ion-md-star");
      stars[i].setAttribute("aria-label", "star");
      starsCounter--;
      indexCounter++;
    }

    if(starsCounter == 0.5){
      stars[indexCounter].setAttribute("name", "star-half");
      stars[indexCounter].setAttribute("class", "star-icon icon icon-md ion-md-star-half");
      stars[indexCounter].setAttribute("aria-label", "star half");
    }
  
    

  
  }

}
