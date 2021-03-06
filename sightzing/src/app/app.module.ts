import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TicketsPage } from '../pages/tickets/tickets';
import { AttractionDetailPage } from '../pages/attraction-detail/attraction-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { ExplorePage } from '../pages/explore/explore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage } from '../pages/info/info';
import { MyGuidePage } from '../pages/my-guide/my-guide';
import { WelcomePage } from '../pages/welcome/welcome';
import { FilterComponent } from '../components/filter/filter';
import { ExpandableComponent } from '../components/expandable/expandable';
import { TourPage } from '../pages/tour/tour';
import { ProfilePage } from '../pages/profile/profile';
import { TourList } from './tour/tourlist';
import { TicketsBuyPage } from '../pages/tickets-buy/tickets-buy';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage,
    TicketsPage,
    AttractionDetailPage,
    TabsPage,
    MyGuidePage,
    WelcomePage,
    InfoPage,
    FilterComponent,
    ExpandableComponent,
    TourPage,
    ProfilePage,
    TicketsBuyPage,
    LoginPage,
    RegisterPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TicketsPage,
    AttractionDetailPage,
    HomePage,
    ExplorePage,
    MyGuidePage,
    TabsPage,
    InfoPage,
    WelcomePage,
    FilterComponent,
    ExpandableComponent,
    TourPage,
    ProfilePage,
    TicketsBuyPage,
    LoginPage,
    RegisterPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TourList
  ]
})
export class AppModule {

}
