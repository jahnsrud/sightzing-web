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

  titleLabel: string;
  descriptionLabel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.attraction = this.navParams.get("attraction");
    this.titleLabel = this.attraction.title;
    this.descriptionLabel = this.attraction.description;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionDetailPage');
  }

}
