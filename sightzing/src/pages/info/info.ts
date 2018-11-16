
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content } from 'ionic-angular';
import { TourList } from '../../app/tour/tourlist';
import { WelcomePage } from '../welcome/welcome';
import { ProfilePage } from '../profile/profile';



@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  @ViewChild(Content) content: Content;
  items: any = []; //List of items
  itemExpandHeight: number = 120;  //height of items
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public tourList: TourList, public modalController: ModalController) {
    
    /* HOW MANY AND CONTENT OF ITEMS */
    this.items = [
      {
        title: 'About Oslo',
        content: 'Oslo is the best city evah we have trolls and a opera house you can walk on. its pretty cool. we also have lusekofter. brunos and ostehøvels',
        expanded: false,
        iconName: "add"},
      {
        title: 'Practical Information',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"},
      {
        title: 'Public Transportation',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        expanded: false,
        iconName: "add"},
      {
        title: 'About sightZing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"},
      {
        title: 'Terms and Conditions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"}
        ];
              
  }
            
  /* STATEMENT TO SEE IF ITEMS IS EXPANDED OR NOT */
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
            

  /*FUNCTION FOR CHANGE OF ICON*/
  public changeIcon(theItem) {
    
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].iconName = "add";
    }

    theItem.iconName = "remove";

  }

  async presentWelcomePage() {

    const modal = await this.modalController.create(WelcomePage);
    modal.present();
    // return await modal.present();

  }
        
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');

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
    console.log(this.tourList.getTourList());
  }

  changeNavbarOnScroll(){
    let navbar = document.getElementById("navbar-info"); 
    navbar.style.backgroundColor = "white"; 
    navbar.style.boxShadow = "0 2px 10px 1px rgba(150, 150, 150, 0.1), 0 0px 10px 1px rgba(150, 150, 150, 0.1), 0 7px 10px 0 rgba(150, 150, 150, 0.12)";
  }

  changeNavbarToTransparent(){
    let navbar = document.getElementById("navbar-info"); 
    navbar.style.backgroundColor = "transparent"; 
    navbar.style.boxShadow = "none"; 
  }

  async presentProfile() {
    const modal = await this.modalController.create(ProfilePage);
    modal.present();
  }
  
}
          