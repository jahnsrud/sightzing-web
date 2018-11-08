import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import {TourList} from './tour/tourlist';

platformBrowserDynamic().bootstrapModule(AppModule);

export class Main{

    constructor(){

    }
}
