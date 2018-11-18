
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
        content: 'Oslo, the capital of Norway, sits on the southern coast at the head of the Oslofjord. it is known for its green spaces and museums. Oslo is the economic and governmental centre of Norway. Oslo is also a hub of Norwegian trade.',
        expanded: false,
        iconName: "add"},
      {
        title: 'Practical Information',
        content: 'Oslo is a relatively small city and parking is at a premium so a car is a bit of a liability. Fortunately, there is an extensive and superbly edfficient public transport system.',
        expanded: false,
        iconName: "add"},
      {
        title: 'Public Transportation',
        content: 'There exists an efficient public transportation system involving buses, trams, subway, trains and ferries. The city is served by 50 bus lines and eight tram routes, all starting from jernbanetorvet at Oslo S station.',
        expanded: false,
        iconName: "add"},
      {
        title: "About sightZing",
        content: "sihgtZing's mission is to help travelers exploring Oslo for the first time, give them the basic knowledge of how to get to one point from another. We want to help people and give them the ultimate experience when they first come to Oslo.",
        aboutTitle: "Creators",
        creator1: "Markus Jahnsrud",
        creator2: "Stine Sandberg",
        creator3: "Håvard Nordlie Mathisen",
        creator4: " Marcus Tveide Jensen",
        creator5: "Andreas Breime Persson",
        expanded: false,
        iconName: "add"},
      {
        title: 'Terms and Conditions',
        content: 'Please read these Terms and Conditions carefully before using the sightZing mobile application operated by us. ',
        content2: "Your access to and use of the Service is conditioned on your acceptance of and compilance with these terms. these terms apply to all visitors, users and others who access or use the service.",
        content3: "By accessing or using the service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
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
          