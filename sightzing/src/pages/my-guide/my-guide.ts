import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { TourList } from '../../app/tour/tourlist';
import { Attraction } from '../../app/attraction/attraction';
import { MapPage } from '../map/map';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
// import mapboxgl from 'mapbox-gl';

const attraction: Attraction = new Attraction();

@IonicPage()
@Component({
  selector: 'page-my-guide',
  templateUrl: 'my-guide.html',
})
export class MyGuidePage {
  @ViewChild(Content) content: Content;
  attraction:Attraction;
  time: number;
  attractionsCount:number;
  attractionsList: Attraction[];

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

    this.content.ionScrollStart.subscribe(() => {
      this.changeNavbarOnScroll();
    });
    this.content.ionScrollEnd.subscribe(() => {
      if(this.content.scrollTop == 0){
        this.changeNavbarToTransparent(); 
      }
    });

    //this.attractionsList = this.tourList.getTourList(); 
  }

  changeNavbarOnScroll(){
    let navbar = document.getElementById("navbar-guide"); 
    navbar.style.backgroundColor = "white"; 
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
  }

  changeNavbarToTransparent(){
    let navbar = document.getElementById("navbar-guide"); 
    navbar.style.backgroundColor = "transparent"; 
    navbar.style.boxShadow = "none"; 
  }

  openAttraction(attractionName:string) {
    let attraction = new Attraction();
    attraction.fillListWithAttractions();
    this.navCtrl.push(AttractionDetailPage, {
      attraction: attraction.getAttraction(attractionName)
    });
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
    this.updateTime(); 
    this.updateNumberOfAttractions(); 

    if(this.tourList.getTourList().length < 1){
      let showWhenNoAttration = document.getElementsByClassName("show-when-no-attractions");

      for(let i = 0; i < showWhenNoAttration.length; i++){
        showWhenNoAttration[i].setAttribute("style", "display: block;")
      }

      let showWhenAttractions = document.getElementsByClassName("show-when-attractions"); 
      for(let i = 0; i < showWhenAttractions.length; i++){
        showWhenAttractions[i].setAttribute("style", "display: none;")
      }
    }

    if(this.tourList.getTourList().length > 0){
      let showWhenNoAttration = document.getElementsByClassName("show-when-no-attractions");

      for(let i = 0; i < showWhenNoAttration.length; i++){
        showWhenNoAttration[i].setAttribute("style", "display: none;")
      }

      let showWhenAttractions = document.getElementsByClassName("show-when-attractions"); 
      for(let i = 0; i < showWhenAttractions.length; i++){
        showWhenAttractions[i].setAttribute("style", "display: block;")
      }
    }
  }

  updateTime(){
    this.time = 0; 

    for(let i = 0; i<this.tourList.getTourList().length; i++){
      this.time = this.time + this.tourList.getTourList()[i].time; 
      console.log(this.time);
      console.log("hei");
    }
  }

  updateNumberOfAttractions(){
    this.attractionsCount = 0; 

    this.attractionsCount = this.tourList.getTourList().length;
  }

}
