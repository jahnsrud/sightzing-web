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
  public attraction1 = {name:"The Vigelands Park", time:"2h", stars:5};
  public attraction2 = {name:"Heisann", time:"4h", stars:2};
  public attraction3 = {name:"The Vigelands Park", time:"1h", stars:5};

  public attractions = [this.attraction1, this.attraction2, this.attraction3];;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverController: PopoverController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

  openFilter(event):void{
    let filterPop = this.popoverController.create(FilterComponent);
    filterPop.present({
      ev: event
    });
  }

  changeToResults(choice: string){
    //get the explore-grid
    var exploreGrid = document.getElementById("explore-grid");
    
    //create button-row for choices
    var buttonRow = document.createElement("row");
    buttonRow.className += "btn-row";

    //create button with the element chosen
    var choiceButton = document.createElement("button");
    choiceButton.className += "choiceButton button button-md button-default button-default-md button-round button-round-md";
    
    //create the text classes for the button
    var btnText = document.createElement("h6");
    btnText.className += "button-txt";

    //create the text for the button
    var buttonName = document.createTextNode(choice);
    btnText.appendChild(buttonName); 

    //add the text to the button
    choiceButton.appendChild(btnText);

    //add the button to the button-row
    buttonRow.appendChild(choiceButton);
    
    //Fjern alle rader i ExploreGrid når man klikker på en kategori
    while(exploreGrid.firstChild){
      exploreGrid.removeChild(exploreGrid.firstChild);
    }

    exploreGrid.appendChild(buttonRow);

    //Legg til rader for hver av attraksjonene som skal vises i resultatet
    for(var i = 0; i<this.attractions.length; i++){
      var resultRow = document.createElement("ion-row");
      exploreGrid.appendChild(resultRow);
    }
  }

}
