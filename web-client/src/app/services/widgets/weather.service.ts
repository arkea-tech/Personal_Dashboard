import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Weather } from '../../models/Weather.model';

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
}
