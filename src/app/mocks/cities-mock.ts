import {City} from '../core/interfaces/city';

export const CITIES: Array<City> = [
  {
    nameCity:"London",
    forcast:  {
      conditions:"string",
      wind:{speed:10,direction:"string"},
      temperature:{
        day:{
          min:5,
          max:10
        },
        night:{
          min:4,
          max:8
        }
      }
      }
  },
  {
    nameCity:"London",
    forcast:  {
      conditions:"string",
      wind:{speed:10,direction:"string"},
      temperature:{
        day:{
          min:5,
          max:10
        },
        night:{
          min:4,
          max:8
        }
      }
      }
  },
]