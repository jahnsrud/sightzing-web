import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello FilterComponent Component');
    this.text = 'Hello World';
  }

}
