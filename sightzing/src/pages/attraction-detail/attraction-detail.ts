import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  // let attraction = 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(this.navParams.get("attraction"));

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionDetailPage');
  }

}
