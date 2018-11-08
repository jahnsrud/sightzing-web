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

    constructor(){}

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
        this.addNewTourToList("The Panorama Tour", "", "../assets/imgs/panorama-tour.jpg", 3.5, attraction.getAttractionByCategory("Sights"));
        this.addNewTourToList("For the Cultural Ones", "", "../assets/imgs/cultural-tour.jpg", 2, attraction.getAttractionByCategory("Museums"));
        this.addNewTourToList("Instafriendly", "", "../assets/imgs/instafriendly-tour.jpg", 5, attraction.getAttractionByCategory("Nature & Parks"))
    }

}