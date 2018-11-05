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
        this.addNewAttractionToList("Akershus Fortress", "description", "../assets/imgs/akershus-festning.jpg", "googleplacesid", "website", 1, 4.5, "Sights", 1);
        this.addNewAttractionToList("Royal Palace", "description", "../assets/imgs/royal-palace.jpg", "", "", 1, 4, "Sights", 2);
        this.addNewAttractionToList("Oslo City Hall", "description", "../assets/imgs/city-hall.jpeg", "", "", 1, 3, "Sights", 4);
        this.addNewAttractionToList("Oslo Cathedral", "description", "../assets/imgs/oslo-cathedral.jpeg", "", "", 1, 5, "Sights", 2);

        //Museums
        this.addNewAttractionToList("Fram Museum", "description", "../assets/imgs/fram-museum.jpg", "", "", 1, 5, "Museums", 1);
        this.addNewAttractionToList("Kon Tiki Museum", "description", "../assets/imgs/kon-tiki-museum.jpeg", "", "", 3, 5, "Museums", 2.5);
        this.addNewAttractionToList("The Vikingship Museum", "description", "../assets/imgs/vikingship-museum.jpg", "", "", 1, 3.5, "Museums", 5);
        this.addNewAttractionToList("Nobel Peace Center", "description", "../assets/imgs/nobel-peace-center.jpeg", "", "", 1, 3, "Museum", 2.5);
        this.addNewAttractionToList("National Gallery", "description", "../assets/imgs/national-gallery.jpg", "", "", 2, 4, "Museums", 1.5);
        this.addNewAttractionToList("Astrup Fearnley Museum", "description", "../assets/imgs/astrup-fearnley.jpeg", "", "", 3, 5, "Museums", 2);

        //Theatre & Opera 
        this.addNewAttractionToList("Oslo Opera House", "description", "../assets/imgs/opera-house.jpg", "", "", 4, 5, "Theatre & Opera", 3);


        //Nature & Parks
        this.addNewAttractionToList("Bygdøy", "description", "../assets/imgs/bygdoy.jpg", "", "", 1, 3.5, "Nature & Parks", 1);
        this.addNewAttractionToList("The Vigelands Park", "description", "../assets/imgs/vigelandsparken.jpg", "", "", 1, 5, "Nature & Parks", 2);
        this.addNewAttractionToList("Holmenkollen", "description", "../assets/imgs/holmenkollen.jpg", "", "", 1, 4.5, "Nature & Parks", 1.5);
        this.addNewAttractionToList("Nordmarka", "description", "../assets/imgs/nordmarka.jpg", "", "", 1, 4, "Nature & Parks", 2);
        this.addNewAttractionToList("Sognsvann", "description", "../assets/imgs/sognsvann.jpg", "", "", 1, 3.5, "Nature & Parks", 1);

        //Food & Drinks
        this.addNewAttractionToList("Maaemo", "description", "../assets/imgs/maaemo.jpg", "", "", 1, 5, "Food & Drinks", 2);
        this.addNewAttractionToList("Posthallen Restaurant", "description", "../assets/imgs/posthallen.jpg", "", "", 1, 3.5, "Food & Drinks", 3);

        //Shopping
        this.addNewAttractionToList("Karl Johan", "description", "../assets/imgs/karl-johansgate.jpg", "", "", 1, 4, "Shopping", 1.5);
        this.addNewAttractionToList("Oslo City", "description", "../assets/imgs/oslo-city.jpeg", "", "", 1, 3, "Shopping", 1);

        //Fun & Games
        this.addNewAttractionToList("The Escape Games", "description", "../assets/imgs/escape-room.jpg", "", "", 1, 2.5, "Fun & Games", 2);
        this.addNewAttractionToList("Tusenfryd", "description", "../assets/imgs/tusenfryd.jpg", "", "", 1, 3, "Fun & Games", 2);
        
        //Spas & Wellness
        this.addNewAttractionToList("The Thief Spa", "description", "../assets/imgs/the-thief.jpg", "", "", 1, 5, "Spas & Wellness", 2);

        //Clubs & Pubs
        this.addNewAttractionToList("Jaeger", "description", "../assets/imgs/jaeger.jpg", "", "", 1, 5, "Clubs & Pubs", 1.5);
        this.addNewAttractionToList("The Villa", "description", "../assets/imgs/the-villa.jpg", "", "", 1, 4, "Clubs & Pubs", 2);
    
    }

    public fillListWithTours(){
        this.addNewTourToList("The Panorama Tour", "", "../assets/imgs/panorama-tour.jpg", 3.5, this.getAttractionByCategory("Sights"));
        this.addNewTourToList("For the Cultural Ones", "", "../assets/imgs/cultural-tour.jpg", 2, this.getAttractionByCategory("Museums"));
        this.addNewTourToList("Instafriendly", "", "../assets/imgs/instafriendly-tour.jpg", 5, this.getAttractionByCategory("Nature & Parks")) 
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