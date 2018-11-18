import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tour } from '../../app/tour/tour';
import { Attraction } from '../../app/attraction/attraction';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { TourList } from '../../app/tour/tourlist';

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
  attractionsCount:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mainTourList: TourList, public toastController: ToastController) {
  	this.tour = this.navParams.get("tour");
    console.log(this.tour);

    this.attractionsCount = this.tour.attractions.length;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }

  presentAttraction(title: string) {
    let attraction = new Attraction();
    attraction.fillListWithAttractions();
    this.navCtrl.push(AttractionDetailPage, {
      attraction: attraction.getAttraction(title)
    });
  }

  addAllAttractions() {

    this.mainTourList.addTourToList(this.tour);

    let toast = this.toastController.create({
      message: '✅ Added ' + this.tour.title + " to My Guide. Happy exploring!",
      duration: 3000,
      position: 'top'
    });

    toast.present();

  }

}