import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


export class Main{
    attractions: Attraction[] = new Array(); 

    constructor(){

    }

    public addNewAttractionToList(title: string,
        description: string, 
        imageUrl: string, 
        googlePlacesId: string, 
        website: string, 
        price: number,
        rating: number){
            var attraction: Attraction = new Attraction(); 
            attraction.setValues(title, description, imageUrl, googlePlacesId, website, price, rating);
            this.attractions.push(attraction); 
            console.log(this.attractions);
    }

    getAttraction(name: string){
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].title == name){
                return this.attractions[i];
            }
        }
        return null; 
    }

    getAttractions(){
        return this.attractions; 
    }
}


export class Attraction {
    
    title: String;
    description: String; // intro-teksten til guide
    imageUrl: String;
    googlePlacesId: String;
    website: String;
    price: number; 
    rating: number; 


    // more pictures
    // opening hours
  

    constructor(){
        
    }

    setValues(title: string, 
        description: string, 
        imageUrl: string, 
        googlePlacesId: string, 
        website: string, 
        price: number, 
        rating: number){
            this.title = title; 
            this.description = description; 
            this.imageUrl = imageUrl; 
            this.googlePlacesId = googlePlacesId;
            this.website = website; 
            this.price = price; 
            this.rating = rating; 
        }
  }
  
  export class Tour {
  
    title: String;
    description: String;
    imageUrl: String;
  
    totalTime: Number;
    rating: Number;
  
    // attractions
  
  }