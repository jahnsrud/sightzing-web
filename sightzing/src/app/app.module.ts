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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage, 
    TicketsPage,
    AttractionDetailPage,
    TabsPage,
    MyGuidePage,
    InfoPage
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
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}