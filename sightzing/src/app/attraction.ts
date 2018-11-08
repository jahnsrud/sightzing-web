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