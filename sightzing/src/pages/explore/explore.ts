import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverController: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

  openFilter(event){
    let filterPop = this.popoverController.create(FilterComponent);
    filterPop.present({
      ev: event
    });
  }

}
