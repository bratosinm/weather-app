import { Component, OnInit } from '@angular/core';
import { CityService } from '../core/services/city.service';
import { City } from '../core/interfaces/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cities: Array<City> = [];
  constructor(private cityService: CityService) {}
  ngOnInit() {
    this.cities=this.cityService.getCities();
  }
}
