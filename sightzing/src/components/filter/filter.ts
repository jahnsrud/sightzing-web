import { Component } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class FilterComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
  }

  closeFilter(){
    this.viewCtrl.dismiss();
  }
}
