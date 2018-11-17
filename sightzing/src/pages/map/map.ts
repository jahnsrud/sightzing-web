import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.configureMap();
  }

  configureMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiamFobWFyMTciLCJhIjoiY2pvazNkODgyMDJtOTNwbW43YTQ2azA5ZSJ9.iPR0QgDHkzsJMy6jgCGNMg';
    const map = new mapboxgl.Map({
      container: 'map',
      center: [
        10.736283711544957,
        59.91607882117212],
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 11
    });

    // Nasjonalgalleriet
    new mapboxgl.Marker()
      .setLngLat([10.737166, 59.916865])
      .addTo(map);

    // Mathallen
    new mapboxgl.Marker()
      .setLngLat([10.752046000000064, 59.922217])
      .addTo(map);

    // Stortinget
    new mapboxgl.Marker()
      .setLngLat([10.741821399999935, 
        59.9137772])
      .addTo(map);

    // Frognerparken
    new mapboxgl.Marker()
      .setLngLat([10.703473400000007, 
        59.92645829999999])
      .addTo(map);  
  }

}
