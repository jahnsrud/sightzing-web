import { Component, Testability } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { WelcomePage } from '../welcome/welcome';
import { TourPage } from '../tour/tour'
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController:NavController, public modalController: ModalController) {

    this.getCurrentWeather();
    this.displayRandomQuote();

    if (this.isFirstLaunch()) {
        // presenter welcome
    }

  }

  getCurrentWeather() {

    // http://www.yr.no/place/Norway/Oslo/Oslo/Oslo/forecast_hour_by_hour.xml

  }

  async presentWelcomePage() {

    const modal = await this.modalController.create(WelcomePage);
    modal.present();
    // return await modal.present();
    
  }

  async presentAttraction() {

    let attraction:Attraction  = new Attraction();
    attraction.title = "Title";
    attraction.description = "Subtitle";
    attraction.imageUrl = "";
    attraction.googlePlacesId = "";
    attraction.website = "";
    

    this.navController.push(AttractionDetailPage, {
      attraction: attraction
    });

  }

  async presentTour() {
    this.navController.push(TourPage);
  }

  async presentProfile() {
    this.navController.push(ProfilePage);
  }

  isFirstLaunch() {

    // legg inn logikk her

    localStorage.getItem("firstLaunch");
    localStorage.setItem("firstLaunch", "false");

    return true;

  }
  quoteList:string[] = ["Party in the city where the heat is on",

                        "Somebody call 911, shawty's fire burning on the dancefloor",
                        
                        "Fire burning fire burning on the dancefloor",
                        
                        "I am getting so hot, i wanna take my clothes off",
                        
                        "It's gettin hot in here!",
                        
                        "I wanna make you wet",
                        
                        "I wanna make you sweat",
                        
                        "It rains, it pours, it rains, it pours",
                        
                        "I only wanted to see you laughing in the purple rain.",
                        
                        "lil' homie in my hood, when it rains it pours",
                      
                        "I tell her baby baby baby baby, I'm a fireball",

                        "The sun is shining, and so are you",

                        "Baby, it's cold outside",

                        "Cloudy with a chance of meatballs",

                        "Blowing with the wind, of change",

                        "It's raining men, Hallelujah!",

                        "You better run, you better take cover",

                        "Cant you hear, can't you hear the thunder",

                        "Man's not hot"];
  
 

    randomQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];
   

  displayRandomQuote() {
    
    window.onload= () => document.getElementById("weather-subtitle").innerHTML = this.randomQuote;
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