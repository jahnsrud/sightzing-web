import {Attraction} from '../attraction/attraction';

const attraction: Attraction = new Attraction();

export class Tour {

    tours: Tour[] = new Array();

    title: string;
    description: string;
    imageUrl: string;
    rating: number;
    attractions: Attraction[];
    totalTime: number = 0;

    constructor(){

    }
    
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
                attractions.forEach(e => {
                    this.totalTime += e.time;
                });
          } else{this.totalTime = 0; }

    }

    addNewTourToList(title: string, description: string, imageUrl: string, rating: number, attractions: Attraction[]){
        var tour: Tour = new Tour();
        tour.setValues(title, description, imageUrl, rating, attractions);
        this.tours.push(tour);
    }

    getTour(name: string){
        for(var i = 0; i < this.tours.length; i++){
            if(this.tours[i].title == name){
                return this.tours[i];
            }
        }
        return null;
    }

    getTours(){
        return this.tours;
    }

    fillListWithTours(){
        this.addNewTourToList("The Panorama Tour", "Enhance your sightseeing experience of Oslo on a half-day Panorama tour of Norway's capital, delve into the rich history of the city. Take a look at Akershus Fortress, stop for photos at the royal palace, and tour the Oslo City Hall as well as the Oslo Cathedral.", "../assets/imgs/panorama-tour.jpg", 3.5, attraction.getAttractionByCategory("Sights"));
        this.addNewTourToList("For the Cultural Ones", "Follow the footsteps of ancient vikings, see the main attractions in the historic centers as you trace a route from Fram museum to the National Gallery.", "../assets/imgs/cultural-tour.jpg", 2, attraction.getAttractionByCategory("Museums"));
        this.addNewTourToList("Instafriendly", "Explore the amazing sculptures and extraordinary figures in The Vigelands Park, take a look at the amazingly big ski jump, and then take your trip to Nordmarka and take pictures you will remember for life.", "../assets/imgs/instafriendly-tour.jpg", 5, attraction.getAttractionByCategory("Nature & Parks"));
        this.addNewTourToList("Hidden Treasures of Oslo", "Avoid the tourist traps and experience Oslo like the people who live there.", "../assets/imgs/instafriendly.jpg", 5, attraction.getAttractionByCategory("Nature & Parks"))
    }

}