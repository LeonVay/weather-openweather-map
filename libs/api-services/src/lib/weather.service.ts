import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { getOptions } from "./helper.util";


@Injectable({providedIn: 'root'})
  export class WeatherService {

  private readonly _apiKey = '1a41bc4cbd3c74d1ea761e243ff4b5a1';
  private readonly API_CITIES_LIST = `https://api.openweathermap.org/data/2.5/find?appid=${this._apiKey}&type=like&sort=population&cnt=30`;

  private readonly API_COORDINATES = `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${this._apiKey}`; // http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}
  private readonly API_WEEKLY_DATA = `https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,daily,alerts&appid=${this._apiKey}`; // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts&appid={API key}
  private readonly API_DAILY_DATA = `https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,hourly,alerts&appid=${this._apiKey}`; // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&appid={API key}

  constructor(private httpClient: HttpClient) {
  }

  public getCityCoordinates(city: string): Observable<any> {
    return this.httpClient.get<any>(this.API_COORDINATES, getOptions({q: city}));
  }

  public getWeekInfo(city: any): Observable<any> {
    return this.httpClient.get<any>(this.API_WEEKLY_DATA, getOptions({lon: city.lon, lat: city.lat}));
  }

  public getDayInfo(city: any): Observable<any> {
    return this.httpClient.get<any>(this.API_DAILY_DATA, getOptions({lon: city.log, lat: city.lat}));
  }

  public getListOfCities(query: string): Observable<any> {
    return this.httpClient.get<any>(this.API_CITIES_LIST, getOptions({q: query}));
  }
}
