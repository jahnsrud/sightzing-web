
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {


  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        title: 'Practical information: \n',
        content: 'Oslo is the best city evah we have trolls and a opera house you can walk on. its pretty cool. we also have lusekofter. brunos and ostehøvels',
        expanded: false
      },
      {expanded: false}
    ];

  }
  
  expandItem(item) {
    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }



}
