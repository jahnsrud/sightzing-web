import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TourList} from '../../app/tour/tourlist';
import {Attraction} from '../../app/attraction/attraction';

const attraction: Attraction = new Attraction();

@IonicPage()
@Component({
  selector: 'page-my-guide',
  templateUrl: 'my-guide.html',
})
export class MyGuidePage {

  myAttractions = attraction.getAttraction("Nordmarka");

  constructor(public navCtrl: NavController, public navParams: NavParams, public tourList: TourList) {
    attraction.fillListWithAttractions();
    this.tourList.getTourList();

  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGuidePage');
  }

  ionViewDidEnter(){
  	//This list is populated from where the user adds tours or attractions.
  	console.log(this.tourList.getTourList());
  }

}
