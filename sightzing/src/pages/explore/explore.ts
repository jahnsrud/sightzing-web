import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';
import { Main } from '../../app/main'; 

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
  results = new Array();
  //onResultPage = false; 
  main: Main = new Main(); 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverController: PopoverController) {
  

    //window.onload = () => console.log("this worksssss");
    
    //(document).ready = this.addCorrectAmountOfAttractions; 
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

  addCorrectAmountOfAttractions(){
    var toursTxt = document.getElementById("tours-number");
    console.log(this.main.getTours().length); 
    console.log(toursTxt);
    toursTxt.innerHTML = this.main.getTours().length + "tours";
  }


  changeToResults(choice: string){
    if(choice == "Tours"){
      this.results = this.main.getTours(); 
    }

    else if(choice == "All"){
      this.results = this.main.getAttractions(); 
    }

    else {
      this.results = this.main.getAttractionByCategory(choice); 
      console.log(this.results);
      console.log("url: " + this.results[0].imageUrl);
    }

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

    for(var i = 1; i<this.results.length; i++){
      resultGrid.appendChild(resultRow.cloneNode(true)); 
    }

    var images = resultGrid.getElementsByClassName("result-card-img"); 
    var titles = resultGrid.getElementsByClassName("result-title"); 
    var stars = resultGrid.getElementsByClassName("star-box"); 

    for(var j = 0; j < images.length; j++){
      console.log(this.results[j]); 
      images[j].setAttribute("src", this.results[j].imageUrl);
    }

    for(var k = 0; k < titles.length; k++){
      titles[k].innerHTML = this.results[k].title;
    }

    for(var l = 0; l < stars.length; l++){
      var starsCounted = 0;
      var attractionStars = this.results[l].rating;


      while(attractionStars > 0){
        var starIcon = document.createElement("ion-icon");
        starIcon.setAttribute("role", "img"); 
        starIcon.className += "star-icon icon icon-md ion-md-star"; 

        var starHalfIcon = document.createElement("ion-icon");
        starHalfIcon.setAttribute("role", "img"); 
        starHalfIcon.className += "star-icon icon icon-md ion-md-star-half";

        

        if(attractionStars >= 1){
          starIcon.setAttribute("name", "star");
          stars[l].appendChild(starIcon); 
          attractionStars--;
          starsCounted++;
        }
        if(attractionStars > 0 && attractionStars < 1){
          starHalfIcon.setAttribute("name", "star-half");
          stars[l].appendChild(starHalfIcon); 
          attractionStars--;
          starsCounted++;
        }
      }

      while(starsCounted < 5){
        var starOutlined = document.createElement("ion-icon");
        starOutlined.setAttribute("role", "img"); 
        starOutlined.setAttribute("name", "star-outline");
        starOutlined.className += "star-icon icon icon-md ion-md-star-outline";

        stars[l].appendChild(starOutlined);
        starsCounted++;
      }

    }


  }

  
  changeToExplore(hei: string){
    //this.onResultPage = false;

    //get the explore-grid
    var exploreGrid = document.getElementById("explore-grid");
    exploreGrid.setAttribute("style", "display: flex;");

    var resultGrid = document.getElementById("result-grid"); 
    resultGrid.setAttribute("style", "display: none"); 
    
    //remove the list of attractions
    var resultsRow = resultGrid.getElementsByTagName("ion-row");

    while(resultsRow.length > 2){
      for(var i = 1; i < resultsRow.length; i++){
        resultsRow[i].parentNode.removeChild(resultsRow[i]);
      }
    }
    

    var stars = resultGrid.getElementsByClassName("star-box"); 

    for(var j = 0; j<stars.length; j++){
      while(stars[j].firstChild){
        stars[j].removeChild(stars[j].firstChild);
      }
    }

  }

  /*

  CODE FOR SETTING CLICK-FUNCTION DYNAMICALLY: 
  //choiceButton.onclick = () => this.changeToExplore("hei");

  getOnResultPage(){
    return this.onResultPage;
  }*/

    /*
  removeFromRow(id: string){

    var buttonColumn = document.getElementById("btn-col");
    var existingChoices = buttonColumn.children;

    for(var i = 0; i < existingChoices.length; i++){
      if((existingChoices[i].id == id) && (existingChoices.length > 1)){
        buttonColumn.removeChild(existingChoices[i]);
      }
    }

    this.checkIfEmpty(); 
  }

  checkIfEmpty(){
      var buttonColumn = document.getElementById("btn-col");

     if(buttonColumn.children.length < 2){
       this.changeToExplore(); 
     }
  }*/
  

}


