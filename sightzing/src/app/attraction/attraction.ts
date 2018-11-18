//more pictures
//opening hours



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
    attractions: Attraction[] = new Array();

    constructor(){

    }

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

    getAttractions(){
       return this.attractions;
    }

    getAttraction(name: string){
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].title == name){
                return this.attractions[i];
            }
        }
        return null;
    }

    getAttractionByCategory(category: string){

        // Must be here for now. Otherwise this.attractions is empty.
        this.fillListWithAttractions();

        let attractionsWithCat: Attraction[] = new Array();
        for(var i = 0; i < this.attractions.length; i++){
            if(this.attractions[i].category == category){
                attractionsWithCat.push(this.attractions[i]);
            }
        }

        return attractionsWithCat;
    }

    addNewAttractionToList(title: string,
        description: string,
        imageUrl: string,
        googlePlacesId: string,
        website: string,
        price: number,
        rating: number,
        category: string,
        time: number){
            let attraction: Attraction = new Attraction();
            attraction.setValues(title, description, imageUrl, googlePlacesId, website, price, rating, category, time);
            this.attractions.push(attraction);
    }

    fillListWithAttractions(){
        //Sights
        this.attractions = []; 
        this.addNewAttractionToList("Akershus Fortress", "Akershus Fortress or Akershus Castle is a medieval castle that was built to protect and provide a royal residence for Oslo, the capital of Norway. The castle has also been used as a military base, a prison and is currently the temporary seat of the prime minister of Norway.", "../assets/imgs/akershus-festning.jpg", "googleplacesid", "website", 1, 4.5, "Sights", 1);
        this.addNewAttractionToList("Royal Palace", "The Royal Palace in Oslo was built int the first half of the 19th century as the Norwegian residence of the French-born King Charles III of Norway, who reigned as king of Norway and Sweden. The Palace is the official residence of the current Norwegian monarch.", "../assets/imgs/royal-palace.jpg", "", "", 1, 4, "Sights", 2);
        this.addNewAttractionToList("Oslo City Hall", "Oslo City Hall is a municipal building in Oslo, the capital of Norway. It houses the city counsil, the city's administration and various other municipal organisations. The building as it stands today was constructed between 1931 and 1950, with an interruption during the Second World War.", "../assets/imgs/city-hall.jpeg", "", "", 1, 3, "Sights", 4);
        this.addNewAttractionToList("Oslo Cathedral", "Oslo Cathedral -  formerly Our Savior's Church, is the main church for the Church of Norway Diocese of Oslo, as well as the parish curch for downtown Oslo. The present building dates from 1694-1697. The Norwegian Royal Family and the Norwegian Government use the Cathedral for public events.", "../assets/imgs/oslo-cathedral.jpeg", "", "", 1, 5, "Sights", 2);

        //Museums
        this.addNewAttractionToList("Fram Museum", "The Fram Museum is a museum telling the story of Norwegian polar exploration. it is located on the peninsula of Bygdøy in Oslo. Fram Museum is situated in an area with several other museums, including the Kon-tiki Museum and the Norwegian Museum of Cultural History.", "../assets/imgs/fram-museum.jpg", "", "", 1, 5, "Museums", 1);
        this.addNewAttractionToList("Kon Tiki Museum", "The Kon-Tiki Museum is a museum in the Bygdøy peninsula in Oslo, Norway. It houses vessals and maps from the Kon-tiki expedition, as well as a library with about 8000 books. It was opened in a provisional building in 1949.", "../assets/imgs/kon-tiki-museum.jpeg", "", "", 3, 5, "Museums", 2.5);
        this.addNewAttractionToList("The Vikingship Museum", "The Viking Ship Museum is located at Bygdøy in Oslo, Norway. It is part of the Museum of Cultural History of the University of Oslo, and houses archaelogical finds from Tune, Gokstad, Oseberg and the Borre mound cemetery.", "../assets/imgs/vikingship-museum.jpg", "", "", 1, 3.5, "Museums", 5);
        this.addNewAttractionToList("Nobel Peace Center", "The Nobel Peace Center in Oslo, Norway is a showcase for the Nobel peace prize and the ideals it represents. The center is also an arena where culture and politics merge to promote involvment, debate and reflection around topics such as war, peace and conflict resolution.", "../assets/imgs/nobel-peace-center.jpeg", "", "", 1, 3, "Museum", 2.5);
        this.addNewAttractionToList("National Gallery", "The National Museum of Art, Architecture and Design in Oslo is the national museum of art in Norway. it was established on 1 July 2003 through a merge of the Norwegian Museum of Architecture, The Museum of Decorative Arts and Design, the Museum of Contemporary Art, the National Gallery of Norway, and the National Touring Exhibition.", "../assets/imgs/national-gallery.jpg", "", "", 2, 4, "Museums", 1.5);
        this.addNewAttractionToList("Astrup Fearnley Museum", "The Astrup Fearnley Museum of Modern Art is a private owned contemporary art gallery in Oslo, Norway. It was founded and opened to the public in 1993. The collection's main focus is the American appropriation artists from the 1980s.", "../assets/imgs/astrup-fearnley.jpeg", "", "", 3, 5, "Museums", 2);

        //Theatre & Opera
        this.addNewAttractionToList("Oslo Opera House", "The Oslo Opera House is the home of the Norwegian National Opera and Ballet, and the national theatre in Norway. The building is situated in the Bjørvika neighbourhood of central Oslo, at the head of the Oslofjord. it is operated by Statsbygg, the government agency which manages property for the Norwegian government. The structure contains 1,100 rooms in a total area of 38,500 m2.", "../assets/imgs/opera-house.jpg", "", "", 4, 5, "Theatre & Opera", 3);


        //Nature & Parks
        this.addNewAttractionToList("Bygdøy", "Bygdøy or Bygdø is a peninsula situated on the western side of Oslo, Norway. Administratively, Bygdøy belongs to the borough of Frogner. Bygdøy is also the home of five national museums as well as a royal estate.", "../assets/imgs/bygdoy.jpg", "", "", 1, 3.5, "Nature & Parks", 1);
        this.addNewAttractionToList("The Vigelands Park", "The Vigeland Park is the world's largest sculpture park made by a single artist, and is one of Norway's most popular tourist attractions. The park is open to visitors all year round.", "../assets/imgs/vigelandsparken.jpg", "", "", 1, 5, "Nature & Parks", 2);
        this.addNewAttractionToList("Holmenkollen", "Holmenkollen is a neighbourhood in the Vestre Aker borough of Oslo, Norway. In addition to being a residental area, the area has been a ski recreation area since the late 19th century, with its famous ski jumping hill, the holmenkollbakken, hosting competitions since 1892.", "../assets/imgs/holmenkollen.jpg", "", "", 1, 4.5, "Nature & Parks", 1.5);
        this.addNewAttractionToList("Nordmarka", "Nordmarka is the mostly forested region which makes up the northern part of Oslo, Norway. Nordmarka is the largest and most central part of Oslomarka. The area called Nordmarka also extends into the municipalities of Hole, Ringerike, Lunner, Jevnaker and Nittedalen.", "../assets/imgs/nordmarka.jpg", "", "", 1, 4, "Nature & Parks", 2);
        this.addNewAttractionToList("Sognsvann", "Sognsvann is a 3.3 km circumference lake just north of Oslo, Norway. Lying just within the greenbelt around Oslo, the lake is a popular recreational area, used as a camping, picnicking and bathing destination for the residents of Oslo during the summer, as well as cross-country skiing during the winter.", "../assets/imgs/sognsvann.jpg", "", "", 1, 3.5, "Nature & Parks", 1);

        //Food & Drinks
        this.addNewAttractionToList("Maaemo", "Chic, fine dining restaurant for seasonal, Norwegian menu with wine pairings, in minimal setting.", "../assets/imgs/maaemo.jpg", "", "", 1, 5, "Food & Drinks", 2);
        this.addNewAttractionToList("Posthallen Restaurant", "Bar/restaurant in former post office with dark wood furniture & stripped floors, for Nordic cuisine.", "../assets/imgs/posthallen.jpg", "", "", 1, 3.5, "Food & Drinks", 3);

        //Shopping
        this.addNewAttractionToList("Karl Johan", "Karl Johans gate is the main street of the city if Oslo, Norway. The street was named in honor of King Charles III John, who was also King of Sweden as Charles XIV John. Karl Johans gate is a composite of several older streets that used to be seperate thoroughfares.", "../assets/imgs/karl-johansgate.jpg", "", "", 1, 4, "Shopping", 1.5);
        this.addNewAttractionToList("Oslo City", "Oslo city is one of the largest shopping centres in central Oslo, Norway. The shopping centre was built in 1988, and is visited by c. 50,000 people a day - 16 million a year. It generated gross revenues of 1,444 billion Norwegian Kroner in 2005.", "../assets/imgs/oslo-city.jpeg", "", "", 1, 3, "Shopping", 1);

        //Fun & Games
        this.addNewAttractionToList("The Escape Games", "An escape room, also known as an escape game, is a physical adventure game in which players solve a series of puzzles and riddles using clues, hints, and strategy to complete the objective at hand.", "../assets/imgs/escape-room.jpg", "", "", 1, 2.5, "Fun & Games", 2);
        this.addNewAttractionToList("Tusenfryd", "Tusenfryd is an amusement park at Vinterbro, Norway. The park is located 20 kilometers south of Oslo. The park was officially opened on 11 june 1988, after a construction period of 18 months.", "../assets/imgs/tusenfryd.jpg", "", "", 1, 3, "Fun & Games", 2);

        //Spas & Wellness
        this.addNewAttractionToList("The Thief Spa", "Unique treatments for him and for her - facial & body, massage, hands & feet, hammam, rhassoul, aufguss and makeup.", "../assets/imgs/the-thief.jpg", "", "", 1, 5, "Spas & Wellness", 2);

        //Clubs & Pubs
        this.addNewAttractionToList("Jaeger", "An intimate club nestled in the heart of the Norwegian capital, Oslo. Ours is a sonic, manifesto lifted straight from the disco provocateurs of the seventies, and an expansive understanding of house and techno.", "../assets/imgs/jaeger.jpg", "", "", 1, 5, "Clubs & Pubs", 1.5);
        this.addNewAttractionToList("The Villa", "The Villa is an underground club sanctuary that has quickly achieved a reputable status thanks to a consistent run of interesting, current, and cutting edge bookings. Located in the center of Oslo.", "../assets/imgs/the-villa.jpg", "", "", 1, 4, "Clubs & Pubs", 2);
console.log("here");
    }
}