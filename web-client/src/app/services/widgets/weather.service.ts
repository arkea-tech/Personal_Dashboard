import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Weather } from '../../models/Weather.model';
import { WeatherData } from '../../models/interactions/weather/WeatherData.model';

import { Success } from '../../models/http/response';

@Injectable()
export class WeatherService {

    private weatherWidgets: Weather[] = [];

    private apiURL: string = "http://localhost:8080/widget";

    public weatherSubject = new Subject<Weather[]>();
    public errorSubject = new Subject<string>();

    constructor(private http: HttpClient) {}

    emitWeatherSubject()
    {
        this.weatherSubject.next(this.weatherWidgets.slice());
    }

    emitErrorSubject(error)
    {
        this.errorSubject.next(error);
    }

    getWeatherWidgets()
    {
        this.http.get(`${this.apiURL}/weather`).subscribe(
          (weatherWidgets: Weather[]) => {
            if (weatherWidgets) {
              this.weatherWidgets = weatherWidgets;
              this.emitWeatherSubject();
            }
          },
          this.emitErrorSubject
        );
    }

    createWeatherWidget(weatherData: WeatherData)
    {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.apiURL}/weather`, weatherData).subscribe(
                (response: Success) => {
                  resolve(response);
                },
                (error) => {
                  reject(error);
                }
            );
        });
    }

    deleteWeatherWidget(id: string) {
        return new Promise((resolve, reject) => {
          this.http.delete(`${this.apiURL}/weather/` + id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
    }
}
