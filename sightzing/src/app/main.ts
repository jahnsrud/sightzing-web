import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


export class Main{
    attractions: Attraction[] = new Array(); 

    constructor(){
        this.fillListWithAttractions(); 
    }

    public addNewAttractionToList(title: string,
        description: String, 
        imageUrl: String, 
        googlePlacesId: String, 
        website: String, 
        price: Number,
        rating: Number, 
        category: String){
            var attraction: Attraction = new Attraction(); 
            attraction.setValues(title, description, imageUrl, googlePlacesId, website, price, rating, category);
            this.attractions.push(attraction); 
    }

    public getAttraction(name: string){
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].title == name){
                return this.attractions[i];
            }
        }
        return null; 
    }

    public getAttractions(){
        return this.attractions; 
    }

    public getAttractionByCategory(category: string){
        let attractionsWithCat: Attraction[] = new Array(); 
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].category == category){
                attractionsWithCat.push(this.attractions[i]);
            }
        }
        return attractionsWithCat;
    }

    public fillListWithAttractions(){
        //Sights
        this.addNewAttractionToList("Akershus Fortress", "description", "", "", "", 1, 5, "Sights");
        this.addNewAttractionToList("Royal Palace", "description", "", "", "", 1, 5, "Sights");
        this.addNewAttractionToList("Oslo Rådhus", "description", "", "", "", 1, 5, "Sights");
        this.addNewAttractionToList("Oslo Cathedral", "description", "", "", "", 1, 5, "Sights");

        //Museums
        this.addNewAttractionToList("Fram Museum", "description", "", "", "", 1, 5, "Museums");
        this.addNewAttractionToList("Kon Tiki Museum", "description", "", "", "", 1, 5, "Museums");
        this.addNewAttractionToList("The Vikingship Museum", "description", "", "", "", 1, 5, "Museums");
        this.addNewAttractionToList("Nobel Peace Center", "description", "", "", "", 1, 5, "Museum");
        this.addNewAttractionToList("National Museum of Art", "description", "", "", "", 1, 5, "Museums");
        this.addNewAttractionToList("Astrup Fearnley Museum", "description", "", "", "", 1, 5, "Museums");

        //Theatre & Opera 
        this.addNewAttractionToList("Oslo Opera House", "description", "", "", "", 1, 5, "Theatre & Opera");


        //Nature & Parks
        this.addNewAttractionToList("Bygdøy", "description", "", "", "", 1, 5, "Nature & Parks");
        this.addNewAttractionToList("The Vigelands Park", "description", "", "", "", 1, 5, "Nature & Parks");
        this.addNewAttractionToList("Holmenkollbakken", "description", "", "", "", 1, 5, "Nature & Parks");
        this.addNewAttractionToList("The Vigelands Park", "description", "", "", "", 1, 5, "Nature & Parks");
        this.addNewAttractionToList("Sognsvann", "description", "", "", "", 1, 5, "Nature & Parks");

        //Food & Drinks
        this.addNewAttractionToList("Maaemo", "description", "", "", "", 1, 5, "Food & Drinks");
        this.addNewAttractionToList("Posthallen Restaurant", "description", "", "", "", 1, 5, "Food & Drinks");

        //Shopping
        this.addNewAttractionToList("Karl Johan", "description", "", "", "", 1, 5, "Shopping");
        this.addNewAttractionToList("Oslo City", "description", "", "", "", 1, 5, "Shopping");

        //Fun & Games
        this.addNewAttractionToList("The Escape Games", "description", "", "", "", 1, 5, "Fun & Games");
        this.addNewAttractionToList("Tusenfryd", "description", "", "", "", 1, 5, "Fun & Games");
        
        //Spas & Wellness
        this.addNewAttractionToList("Thief Spa", "description", "", "", "", 1, 5, "Spas & Wellness");

        //Clubs & Pubs
        this.addNewAttractionToList("Jaeger", "description", "", "", "", 1, 5, "Clubs & Pubs");
        this.addNewAttractionToList("The Villa", "description", "", "", "", 1, 5, "Clubs & Pubs");
    
    }
}


export class Attraction {
    
    title: String;
    description: String; // intro-teksten til guide
    imageUrl: String;
    googlePlacesId: String;
    website: String;
    price: Number; 
    rating: Number; 
    category: String; 


    // more pictures
    // opening hours
  

    constructor(){
        
    }

    setValues(title: String, 
        description: String, 
        imageUrl: String, 
        googlePlacesId: String, 
        website: String, 
        price: Number, 
        rating: Number, 
        category: String){
            this.title = title; 
            this.description = description; 
            this.imageUrl = imageUrl; 
            this.googlePlacesId = googlePlacesId;
            this.website = website; 
            this.price = price; 
            this.rating = rating;
            this.category = category; 
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