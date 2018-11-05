import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Label } from 'ionic-angular';
import { Attraction } from '../../app/main';

/**
 * Generated class for the AttractionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attraction-detail',
  templateUrl: 'attraction-detail.html',
})
export class AttractionDetailPage {

  attraction:Attraction;

  title: string;
  description: string;
  imageUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.attraction = this.navParams.get("attraction");
    this.title = this.attraction.title;
    this.description = this.attraction.description;
    this.imageUrl = this.attraction.imageUrl;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionDetailPage');
  }

}
