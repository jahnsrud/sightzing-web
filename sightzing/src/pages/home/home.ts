import { Component, Testability } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { WelcomePage } from '../welcome/welcome';
import { TourPage } from '../tour/tour'
import { Tour } from '../../app/tour/tour';
import { TourList } from '../../app/tour/tourlist';
import { ProfilePage } from '../profile/profile';
import { Attraction } from '../../app/attraction/attraction';

const tour: Tour = new Tour();
const attraction: Attraction = new Attraction();

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  featuredList: any[];
  tourList: any;
  attractionList: any;
  eventList: any;

  constructor(public navController: NavController, public modalController: ModalController, public mainTourList: TourList, public toastCtrl:ToastController) {

    this.getCurrentWeather();
    this.displayRandomQuote();
    attraction.fillListWithAttractions();
    tour.fillListWithTours();

    if (this.isFirstLaunch()) {
      // presenter welcome
    }

    this.featuredList = [
      {
        "title": "Hidden treasures of Oslo",
        "type": "Tour",
        "attractions": [
          attraction.getAttraction("Nordmarka"),
          attraction.getAttraction("Fram Museum"),
          attraction.getAttraction("Oslo Cathedral")
        ],
        "time": 0,
        "image": "../../assets/imgs/all-attractions.jpg"
      },
      {
        "title": attraction.getAttraction("Holmenkollen").title,
        "type": "Attraction",
        "attraction": attraction.getAttraction("Holmenkollen"),
        "image": attraction.getAttraction("Holmenkollen").imageUrl
      },
      {
        "title": attraction.getAttraction("National Gallery").title,
        "type": "Attraction",
        "attraction": attraction.getAttraction("National Gallery"),
        "image": attraction.getAttraction("National Gallery").imageUrl
      }
    ];

    this.eventList = [...attraction.getAttractions()].slice(4, 8);

    this.tourList = tour.getTours();

    this.attractionList = attraction.getAttractions();

  }

  getCurrentWeather() {

    // http://www.yr.no/place/Norway/Oslo/Oslo/Oslo/forecast_hour_by_hour.xml

  }

  getFeaturedTime() {
    this.featuredList.forEach(elem => {
      if (elem.type == "Tour") {
        elem.attractions.forEach(e => {
          elem.time += e.time;
        });
      }
    });
  }

  addAttractionToMainList(i: string) {
    this.mainTourList.addAttractionToList(attraction.getAttraction(i));

    let toast = this.toastCtrl.create({
      message: '✅ Added ' + attraction.getAttraction(i).title,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

  }

  addTourToMainList(i: string) {
    this.mainTourList.addTourToList(tour.getTour(i));
  }

  async presentWelcomePage() {

    const modal = await this.modalController.create(WelcomePage);
    modal.present();

  }

  async presentAttraction(i: string) {
    let attraction = new Attraction();
    attraction.fillListWithAttractions();
    this.navController.push(AttractionDetailPage, {
      attraction: attraction.getAttraction(i)
    });

  }

  async presentTour(i: string) {
    let tour = new Tour();
    tour.fillListWithTours();

    this.navController.push(TourPage, {
      tour: tour.getTour(i)
    });
  }

  async presentProfile() {
    const modal = await this.modalController.create(ProfilePage);
    modal.present();
  }

  isFirstLaunch() {

    // legg inn logikk her

    localStorage.getItem("firstLaunch");
    localStorage.setItem("firstLaunch", "false");

    return true;

  }
  quoteList: string[] = ["Party in the city where the heat is on",

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

    window.onload = () => document.getElementById("weather-subtitle").innerHTML = this.randomQuote;
  }

}