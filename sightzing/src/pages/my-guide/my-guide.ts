import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TourList} from '../../app/tour/tourlist';
import {Attraction} from '../../app/attraction/attraction';
import { MapPage } from '../map/map';
// import mapboxgl from 'mapbox-gl';

const attraction: Attraction = new Attraction();

@IonicPage()
@Component({
  selector: 'page-my-guide',
  templateUrl: 'my-guide.html',
})
export class MyGuidePage {
  attraction:Attraction;

  time: number;
  attractionsCount:number;

  //myAttractions = attraction.getAttraction("Nordmarka");

  constructor(public navCtrl: NavController, public navParams: NavParams, public tourList: TourList) {
    attraction.fillListWithAttractions();

    //this.time = this.attraction.time;

    //this.tourList.getTourList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGuidePage');

    /* mapboxgl.accessToken = 'pk.eyJ1IjoiamFobWFyMTciLCJhIjoiY2pvazNkODgyMDJtOTNwbW43YTQ2azA5ZSJ9.iPR0QgDHkzsJMy6jgCGNMg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [59.91607882117212, 10.736283711544957],
        zoom: 9
    });*/
  }

  openMap() {
    this.navCtrl.push(MapPage);
  }

  /* getAttractionTime() {
    this.fillListWithAttractions.forEach(elem => {
      if (elem.type == "Tour") {
        elem.attractions.forEach(e => {
          elem.time += e.time;
        });
      }
    });
  } */

  ionViewDidEnter(){
  	//This list is populated from where the user adds tours or attractions.
  	console.log(this.tourList.getTourList());
  }

}
