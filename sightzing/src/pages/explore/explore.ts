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
  public attraction1 = {name:"The Vigelands Park", time:"2h", stars:5, image:"../../assets/imgs/tours.jpg"};
  public attraction2 = {name:"Heisann", time:"4h", stars:2, image:"../../assets/imgs/tours.jpg"};
  public attraction3 = {name:"The Vigelands Park", time:"1h", stars:5, image:"../../assets/imgs/tours.jpg"};

  public attractions = [this.attraction1, this.attraction2, this.attraction3];

  

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

    //set the explore-grid to display: none
    exploreGrid.setAttribute("style", "display: none;");
    
    //Update the information in category button
    var choiceButton = document.getElementById("choice-btn");
    choiceButton.innerHTML = choice; 

    //set the result-grid to display: flex
    var resultGrid = document.getElementById("result-grid"); 
    resultGrid.setAttribute("style", "display: flex;"); 

    //Get the resultrow
    var resultRow = document.getElementById("result-row");

    for(var i = 1; i<this.attractions.length; i++){
      resultGrid.appendChild(resultRow.cloneNode(true)); 
    }

    var images = resultGrid.getElementsByClassName("result-card-img"); 
    var titles = resultGrid.getElementsByClassName("result-title"); 
    var stars = resultGrid.getElementsByClassName("star-box"); 

    for(var j = 0; j < images.length; j++){
      images[j].setAttribute("src", this.attractions[j].image);
    }
    
    for(var k = 0; k < titles.length; k++){
      titles[k].innerHTML = this.attractions[k].name;
    }

    for(var l = 0; l < stars.length; l++){
      while(this.attractions[l].stars > 0){
        var starIcon = document.createElement("ion-icon");
        var starHalfIcon = document.createElement("ion-icon");

        if(this.attractions[l].stars >= 1){
          starIcon.setAttribute("name", "star");
          stars[l].appendChild(starIcon); 
          this.attractions[l].stars = this.attractions[l].stars - 1;
        }
        if(this.attractions[l].stars > 0 && this.attractions[l].stars < 1){
          starHalfIcon.setAttribute("name", "star-half");
          stars[l].appendChild(starHalfIcon); 
          this.attractions[l].stars = this.attractions[l].stars - 0.5;
        }
      }
      
    }

  }
  
  changeToExplore(){
      //get the explore-grid
      var exploreGrid = document.getElementById("explore-grid");
      exploreGrid.setAttribute("style", "display: flex;");

      var resultGrid = document.getElementById("result-grid"); 
      resultGrid.setAttribute("style", "display: none"); 
      
      //remove the list of attractions
      var results = resultGrid.getElementsByTagName("ion-row");
      
      for(var i = 1; i < results.length; i++){
        results[i].parentNode.removeChild(results[i]);
      }
    }
  
  
}
