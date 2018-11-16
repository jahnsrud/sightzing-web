import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';
import { Main } from '../../app/main';
import {Attraction} from '../../app/attraction/attraction';
import { Tour } from '../../app/tour/tour';

const attraction: Attraction = new Attraction();
const tour: Tour = new Tour();

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
  @ViewChild(Content) content: Content;
  results = new Array();


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverController: PopoverController) {
    attraction.fillListWithAttractions();
    tour.fillListWithTours();

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');

    this.content.ionScrollStart.subscribe(() => {
      this.changeNavbarOnScroll();
    });
    this.content.ionScrollEnd.subscribe(() => {
      if(this.content.scrollTop == 0){
        this.changeNavbarToTransparent(); 
      }
    });
  }
  
  ionViewDidEnter(){
    this.addCorrectAmountOfAttractions();
  }

  changeNavbarOnScroll(){
    let navbar = document.getElementById("navbar-explore"); 
    navbar.style.backgroundColor = "white"; 
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
  }

  changeNavbarToTransparent(){
    let navbar = document.getElementById("navbar-explore"); 
    navbar.style.backgroundColor = "transparent"; 
    navbar.style.boxShadow = "none"; 
  }

  

  

  openFilter(event):void{
    let filterPop = this.popoverController.create(FilterComponent);
    filterPop.present({
      ev: event
    });
  }

  addCorrectAmountOfAttractions(){
    let toursTxt = document.getElementById("tours-number");
    toursTxt.innerHTML = tour.getTours().length + " tours";

    let sightsTxt = document.getElementById("sights-number");
    sightsTxt.innerHTML = attraction.getAttractionByCategory("Sights").length + " attractions";

    let theatreTxt = document.getElementById("theatre-number");
    theatreTxt.innerHTML = attraction.getAttractionByCategory("Theatre & Opera").length + " attractions";

    let museumsTxt = document.getElementById("museums-number");
    museumsTxt.innerHTML = attraction.getAttractionByCategory("Museums").length + " attractions";

    let natureTxt = document.getElementById("nature-number");
    natureTxt.innerHTML = attraction.getAttractionByCategory("Nature & Parks").length + " attractions";

    let foodTxt = document.getElementById("food-number");
    foodTxt.innerHTML = attraction.getAttractionByCategory("Food & Drinks").length + " attractions";

    let shoppingTxt = document.getElementById("shopping-number");
    shoppingTxt.innerHTML = attraction.getAttractionByCategory("Shopping").length + " attractions";

    let funTxt = document.getElementById("fun-number");
    funTxt.innerHTML = attraction.getAttractionByCategory("Fun & Games").length + " attractions";

    let spasTxt = document.getElementById("spas-number");
    spasTxt.innerHTML = attraction.getAttractionByCategory("Spas & Wellness").length + " attractions";

    let clubsTxt = document.getElementById("clubs-number");
    clubsTxt.innerHTML = attraction.getAttractionByCategory("Clubs & Pubs").length + " attractions";

    let allTxt = document.getElementById("all-number");
    allTxt.innerHTML = attraction.getAttractions().length + " attractions";
  }

  someRandomMethod(){

  }


  changeToResults(choice: string){
    if(choice == "Tours"){
      this.results = tour.getTours();
    }

    else if(choice == "All"){
      this.results = attraction.getAttractions();
    }

    else {
      this.results = attraction.getAttractionByCategory(choice);
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

    for(let i = 1; i<this.results.length; i++){
      resultGrid.appendChild(resultRow.cloneNode(true));
    }

    var images = resultGrid.getElementsByClassName("result-card-img");
    var titles = resultGrid.getElementsByClassName("result-title");
    var stars = resultGrid.getElementsByClassName("star-box");

    for(let i = 0; i < images.length; i++){
      console.log(this.results[i]);
      images[i].setAttribute("src", this.results[i].imageUrl);
      titles[i].innerHTML = this.results[i].title;

      var starsCounted = 0;
      var attractionStars = this.results[i].rating;

      while(attractionStars > 0){
        var starIcon = document.createElement("ion-icon");
        starIcon.setAttribute("role", "img");
        starIcon.className += "star-icon icon icon-md ion-md-star";

        var starHalfIcon = document.createElement("ion-icon");
        starHalfIcon.setAttribute("role", "img");
        starHalfIcon.className += "star-icon icon icon-md ion-md-star-half";

        if(attractionStars >= 1){
          starIcon.setAttribute("name", "star");
          stars[i].appendChild(starIcon);
          attractionStars--;
          starsCounted++;
        }
        if(attractionStars > 0 && attractionStars < 1){
          starHalfIcon.setAttribute("name", "star-half");
          stars[i].appendChild(starHalfIcon);
          attractionStars--;
          starsCounted++;
        }
      }

      while(starsCounted < 5){
        var starOutlined = document.createElement("ion-icon");
        starOutlined.setAttribute("role", "img");
        starOutlined.setAttribute("name", "star-outline");
        starOutlined.className += "star-icon icon icon-md ion-md-star-outline";

        stars[i].appendChild(starOutlined);
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

    for(let i = 0; i<stars.length; i++){
      while(stars[i].firstChild){
        stars[i].removeChild(stars[i].firstChild);
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


