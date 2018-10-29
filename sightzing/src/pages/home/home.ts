import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController:NavController, public modalController: ModalController) {

    this.getCurrentWeather();

    if (this.isFirstLaunch()) {
        // presenter welcome
    }

  }

  getCurrentWeather() {

    // http://www.yr.no/place/Norway/Oslo/Oslo/Oslo/forecast_hour_by_hour.xml

  }
/*
  async presentWelcomePage() {

    const modal = await this.modalController.create({
      component: WelcomePage,

      componentProps: { 
        value: "Test" 
      }
    });
    modal.present();
    return await modal.present();
  }

  async presentAttraction() {
    // push-logikk

    this.navController.navigateForward("attraction-detail");

  }
*/
  isFirstLaunch() {

    // legg inn logikk her

    localStorage.getItem("firstLaunch");
    localStorage.setItem("firstLaunch", "false");

    return true;

  }

}

class Attraction {
    
  title: String;
  description: String; // intro-teksten til guide
  imageUrl: String;
  googlePlacesId: String;
  website: String;

  // more pictures
  // amenities
  // price level
  // rating
  // opening hours


}

class Tour {

  title: String;
  description: String;
  imageUrl: String;

  totalTime: Number;
  rating: Number;

  // attractions

}