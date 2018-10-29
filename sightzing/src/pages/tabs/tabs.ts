import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { TicketsPage } from '../tickets/tickets';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = ;
  // tab3Root = ; 
  tab4Root = TicketsPage;
  // tab5Root = ;

  constructor() {

  }
}
