import { Injectable } from '@angular/core';
import { CITIES } from '../../mocks/cities-mock';
import { City } from '../interfaces/city';

@Injectable()
export class CityService {
  constructor() {}

  getCities(): Array<City> {
    return CITIES;
  }
  
}

