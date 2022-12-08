import { Injectable } from '@angular/core';
import { CITIES } from '../../mocks/cities-mock';
import { City } from '../interfaces/city';

@Injectable({
  providedIn:'root'
})
export class CityService {
  constructor() {}

  getCities(): Array<City> {
    return CITIES;
  }

}