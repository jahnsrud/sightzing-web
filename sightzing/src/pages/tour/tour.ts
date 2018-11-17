import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tour } from '../../app/tour/tour';

/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  tour:Tour;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tour = this.navParams.get("tour");
  	console.log(this.tour);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }

}
