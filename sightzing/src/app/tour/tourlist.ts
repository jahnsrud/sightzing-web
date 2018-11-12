import {Attraction} from '../attraction/attraction';
import {Tour} from './tour'
import { Injectable } from '@angular/core';

const tourList: Attraction[] = new Array();

@Injectable()
export class TourList {

	constructor(){}

	addAttractionToList(attraction: Attraction){
		tourList.push(attraction);
	}

	addTourToList(tour: Tour){
		tour.attractions.forEach(attraction => {
			tourList.push(attraction);
		})
	}

	getTourList(){
		return tourList;
	}

}