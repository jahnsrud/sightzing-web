
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TourList } from '../../app/tour/tourlist';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  
  /* LIST OF ITEMS */
  items: any = [];
  
  /* HEIGHT OF ITEMS */
  itemExpandHeight: number = 120;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public tourList: TourList, public modalController: ModalController) {
    
    /* HOW MANY AND CONTENT OF ITEMS */
    this.items = [
      {
        title: 'About Oslo:',
        content: 'Oslo is the best city evah we have trolls and a opera house you can walk on. its pretty cool. we also have lusekofter. brunos and ostehøvels',
        expanded: false,
        iconName: "add"},
      {
        title: 'Practical Information:',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"},
      {
        title: 'Public Transportation:',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"},
      {
        title: 'About sightZing:',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        expanded: false,
        iconName: "add"},
      {
        title: 'Terms and Conditions:',
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
        }
        
        ionViewDidEnter(){
          console.log(this.tourList.getTourList());
        }
        
      }
          