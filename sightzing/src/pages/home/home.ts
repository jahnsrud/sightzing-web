import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, ToastController, Content, AlertController } from 'ionic-angular';
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
  @ViewChild(Content) content: Content;
  featuredList: any[];
  tourList: any;
  attractionList: any;
  eventList: any;

  constructor(public navController: NavController, public modalController: ModalController, public mainTourList: TourList, public toastCtrl: ToastController, public alertController: AlertController) {

    this.getCurrentWeather();
    this.displayRandomQuote();
    attraction.fillListWithAttractions();
    tour.fillListWithTours();

    if (localStorage.getItem("isLoggedin")=="false"){
      let welcomeModal = this.modalController.create(WelcomePage);
      welcomeModal.present();
    }

    this.featuredList = [
      {
        "title": "Hidden Treasures of Oslo",
        "type": "Tour",
        "attractions": [
        ],
        "time": 7.5,
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

    this.eventList = [
      {
        "title": "Theatre: Julemiddag",
        "description": "",
        "date": "4. December 2018",
        "imageUrl": "../../assets/imgs/julemiddag.jpg"
      },
      {
        "title": "Outdoor Cinema: Home Alone",
        "description": "",
        "date": "7. December 2018",
        "imageUrl": "../../assets/imgs/outdoor-cinema.jpg"
      },
      {
        "title": "Julebrus tasting",
        "description": "",
        "date": "8. December 2018",
        "imageUrl": "../../assets/imgs/julebrus.jpg"
      },
      {
        "title": "Christmas Concert: Kurt Nilsen",
        "description": "",
        "date": "8. December 2018",
        "imageUrl": "../../assets/imgs/kurt-nilsen.jpg"
      },
      {
        "title": "Concert: Ennio Moricone",
        "description": "",
        "date": "10. December 2018",
        "imageUrl": "../../assets/imgs/ennio-morricone.jpg"
      },
      {
        "title": "Ballet: Swan Lake",
        "description": "",
        "date": "11. December 2018",
        "imageUrl": "../../assets/imgs/svanesjoen.jpg"
      }
    ];

    this.tourList = tour.getTours();

    this.attractionList = attraction.getAttractions();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.content.ionScrollStart.subscribe(() => {
      this.changeNavbarOnScroll();
    });
    this.content.ionScrollEnd.subscribe(() => {
      if (this.content.scrollTop == 0) {
        this.changeNavbarToTransparent();
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  changeNavbarOnScroll() {
    let navbar = document.getElementById("navbar-home");
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
  }

  changeNavbarToTransparent() {
    let navbar = document.getElementById("navbar-home");
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
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
      position: 'top'
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
    console.log(tour);

    this.navController.push(TourPage, {
      tour: tour.getTour(i)
    });
  }

  presentFeatured(title: string, type: string) {
    console.log(title, type)
    if (type.toLowerCase() == "tour") {
      this.presentTour(title);
    } else if (type.toLowerCase() == "attraction") {
      this.presentAttraction(title);
    }

  }

  async presentProfile() {
    const modal = await this.modalController.create(ProfilePage);
    modal.present();
  }

  openEvent() {
    let alert = this.alertController.create({
      title: "Not available",
      subTitle: "Events is not available in this version of Sightzing. Check back later 😎",
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  quoteList: string[] = ["Party in the city where the heat is on",

    "It's gettin hot in here!",

    "I only wanted to see you laughing in the purple rain.",

    "The sun is shining, and so are you",

    "Baby, it's cold outside",

    "Cloudy with a chance of meatballs",

    "Blowing with the wind, of change",

    "It's raining men, Hallelujah!",

    "Man's not hot"];



  randomQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];


  displayRandomQuote() {

    window.onload = () => document.getElementById("weather-subtitle").innerHTML = this.randomQuote;
  }

}