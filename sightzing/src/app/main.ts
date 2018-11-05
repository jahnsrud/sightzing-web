import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


export class Main{
    attractions: Attraction[] = new Array(); 
    tours: Tour[] = new Array(); 

    constructor(){
        this.fillListWithAttractions(); 
        this.fillListWithTours(); 
    }

    public addNewAttractionToList(title: string,
        description: string, 
        imageUrl: string, 
        googlePlacesId: string, 
        website: string, 
        price: number,
        rating: number, 
        category: string, 
        time: number){
            var attraction: Attraction = new Attraction(); 
            attraction.setValues(title, description, imageUrl, googlePlacesId, website, price, rating, category, time);
            this.attractions.push(attraction); 
    }

    public addNewTourToList(title: string, description: string, imageUrl: string, rating: number, attractions: Attraction[]){
        var tour: Tour = new Tour(); 
        tour.setValues(title, description, imageUrl, rating, attractions); 
        this.tours.push(tour);
    }

    public getAttraction(name: string){
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].title == name){
                return this.attractions[i];
            }
        }
        return null; 
    }

    public getTour(name: string){
        for(var i = 0; i < this.tours.length; i++){
            if(this.tours[i].title == name){
                return this.tours[i]; 
            }
        }
        return null; 
    }

    public getAttractions(){
        return this.attractions; 
    }

    public getTours(){
        return this.tours; 
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
        this.addNewAttractionToList("Akershus Fortress", "description", "", "", "", 1, 5, "Sights", 1);
        this.addNewAttractionToList("Royal Palace", "description", "", "", "", 1, 5, "Sights", 2);
        this.addNewAttractionToList("Oslo Rådhus", "description", "", "", "", 1, 5, "Sights", 4);
        this.addNewAttractionToList("Oslo Cathedral", "description", "", "", "", 1, 5, "Sights", 2);

        //Museums
        this.addNewAttractionToList("Fram Museum", "description", "", "", "", 1, 5, "Museums", 1);
        this.addNewAttractionToList("Kon Tiki Museum", "description", "", "", "", 1, 5, "Museums", 2.5);
        this.addNewAttractionToList("The Vikingship Museum", "description", "", "", "", 1, 5, "Museums", 5);
        this.addNewAttractionToList("Nobel Peace Center", "description", "", "", "", 1, 5, "Museum", 2.5);
        this.addNewAttractionToList("National Museum of Art", "description", "", "", "", 1, 5, "Museums", 1.5);
        this.addNewAttractionToList("Astrup Fearnley Museum", "description", "", "", "", 1, 5, "Museums", 2);

        //Theatre & Opera 
        this.addNewAttractionToList("Oslo Opera House", "description", "", "", "", 1, 5, "Theatre & Opera", 3);


        //Nature & Parks
        this.addNewAttractionToList("Bygdøy", "description", "", "", "", 1, 5, "Nature & Parks", 1);
        this.addNewAttractionToList("The Vigelands Park", "description", "", "", "", 1, 5, "Nature & Parks", 2);
        this.addNewAttractionToList("Holmenkollbakken", "description", "", "", "", 1, 5, "Nature & Parks", 1.5);
        this.addNewAttractionToList("The Vigelands Park", "description", "", "", "", 1, 5, "Nature & Parks", 2);
        this.addNewAttractionToList("Sognsvann", "description", "", "", "", 1, 5, "Nature & Parks", 1);

        //Food & Drinks
        this.addNewAttractionToList("Maaemo", "description", "", "", "", 1, 5, "Food & Drinks", 2);
        this.addNewAttractionToList("Posthallen Restaurant", "description", "", "", "", 1, 5, "Food & Drinks", 3);

        //Shopping
        this.addNewAttractionToList("Karl Johan", "description", "", "", "", 1, 5, "Shopping", 1.5);
        this.addNewAttractionToList("Oslo City", "description", "", "", "", 1, 5, "Shopping", 1);

        //Fun & Games
        this.addNewAttractionToList("The Escape Games", "description", "", "", "", 1, 5, "Fun & Games", 2);
        this.addNewAttractionToList("Tusenfryd", "description", "", "", "", 1, 5, "Fun & Games", 2);
        
        //Spas & Wellness
        this.addNewAttractionToList("Thief Spa", "description", "", "", "", 1, 5, "Spas & Wellness", 2);

        //Clubs & Pubs
        this.addNewAttractionToList("Jaeger", "description", "", "", "", 1, 5, "Clubs & Pubs", 1.5);
        this.addNewAttractionToList("The Villa", "description", "", "", "", 1, 5, "Clubs & Pubs", 2);
    
    }

    public fillListWithTours(){
        this.addNewTourToList("The Panorama Tour", "", "", 3.5, this.getAttractionByCategory("Sights"));
        this.addNewTourToList("For the Cultural Ones", "", "", 2, this.getAttractionByCategory("Museums"));
        this.addNewTourToList("Instafriendly", "", "", 5, this.getAttractionByCategory("Nature & Parks")) 
    }
}


export class Attraction {
    
    title: string;
    description: string; // intro-teksten til guide
    imageUrl: string;
    googlePlacesId: string;
    website: string;
    price: number; 
    rating: number; 
    category: string; 
    time: number; 


    // more pictures
    // opening hours
  

    constructor(){}

    setValues(title: string, 
        description: string, 
        imageUrl: string, 
        googlePlacesId: string, 
        website: string, 
        price: number, 
        rating: number, 
        category: string, 
        time: number){
            this.title = title; 
            this.description = description; 
            this.imageUrl = imageUrl; 
            this.googlePlacesId = googlePlacesId;
            this.website = website; 
            this.price = price; 
            this.rating = rating;
            this.category = category; 
            this.time = time; 
        }
  }
  
  export class Tour {
  
    title: string;
    description: string;
    imageUrl: string;
    rating: number;
    attractions: Attraction[]; 
    totalTime: number;

    setValues(title: string, 
        description: string, 
        imageUrl: string, 
        rating: number, 
        attractions: Attraction[]){
            this.title = title; 
            this.description = description; 
            this.imageUrl = imageUrl; 
            this.rating = rating; 
            this.attractions = attractions; 

            if(attractions.length > 0){
                for(let i = 0; i < attractions.length; i++){
                    let attractionTime = attractions[i].time; 
                    this.totalTime += attractionTime;
                }
            }

            else{this.totalTime = 0; }

    }
  
  }