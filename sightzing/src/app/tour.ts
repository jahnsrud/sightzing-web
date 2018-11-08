import {Attraction} from './attraction';

export class Tour {

    title: string;
    description: string;
    imageUrl: string;
    rating: number;
    attractions: Attraction[];
    totalTime: number = 0;

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

}