import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Weather } from '../../models/Weather.model';

@Injectable()
export class WeatherService {

    private weatherWidgets: Weather[] = [
        // {
        //     _id: "5edd2a68c6a7016d3e2bfb4c",
        //     city: "Paris",
        //     date: "Sunday, June 7, 2020",
        //     temperature: 19,
        //     condition: {
        //         condition: "light rain",
        //         icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //     },
        //     wind: 1.5,
        //     humidity: 59,
        //     pressure: 1011,
        //     forecast: [
        //         {
        //             day: "Mon, June 8",
        //             condition: {
        //                 condition: "light rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 20,
        //             low: 11
        //         },
        //         {
        //             day: "Tue, June 9",
        //             condition: {
        //                 condition: "overcast clouds",
        //                 icon: "http://openweathermap.org/img/wn/04d@2x.png"
        //             },
        //             high: 17,
        //             low: 11
        //         },
        //         {
        //             day: "Wed, June 10",
        //             condition: {
        //                 condition: "few clouds",
        //                 icon: "http://openweathermap.org/img/wn/02d@2x.png"
        //             },
        //             high: 20,
        //             low: 10
        //         },
        //         {
        //             day: "Thu, June 11",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 19,
        //             low: 13
        //         },
        //         {
        //             day: "Fri, June 12",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 21,
        //             low: 13
        //         }
        //     ]
        // },
        // {
        //     _id: "5edd2a68c6a7016d3e2bfb4c",
        //     city: "Paris",
        //     date: "Sunday, June 7, 2020",
        //     temperature: 19,
        //     condition: {
        //         condition: "light rain",
        //         icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //     },
        //     wind: 1.5,
        //     humidity: 59,
        //     pressure: 1011,
        //     forecast: [
        //         {
        //             day: "Mon, June 8",
        //             condition: {
        //                 condition: "light rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 20,
        //             low: 11
        //         },
        //         {
        //             day: "Tue, June 9",
        //             condition: {
        //                 condition: "overcast clouds",
        //                 icon: "http://openweathermap.org/img/wn/04d@2x.png"
        //             },
        //             high: 17,
        //             low: 11
        //         },
        //         {
        //             day: "Wed, June 10",
        //             condition: {
        //                 condition: "few clouds",
        //                 icon: "http://openweathermap.org/img/wn/02d@2x.png"
        //             },
        //             high: 20,
        //             low: 10
        //         },
        //         {
        //             day: "Thu, June 11",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 19,
        //             low: 13
        //         },
        //         {
        //             day: "Fri, June 12",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 21,
        //             low: 13
        //         }
        //     ]
        // },
        // {
        //     _id: "5edd2a68c6a7016d3e2bfb4c",
        //     city: "Paris",
        //     date: "Sunday, June 7, 2020",
        //     temperature: 19,
        //     condition: {
        //         condition: "light rain",
        //         icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //     },
        //     wind: 1.5,
        //     humidity: 59,
        //     pressure: 1011,
        //     forecast: [
        //         {
        //             day: "Mon, June 8",
        //             condition: {
        //                 condition: "light rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 20,
        //             low: 11
        //         },
        //         {
        //             day: "Tue, June 9",
        //             condition: {
        //                 condition: "overcast clouds",
        //                 icon: "http://openweathermap.org/img/wn/04d@2x.png"
        //             },
        //             high: 17,
        //             low: 11
        //         },
        //         {
        //             day: "Wed, June 10",
        //             condition: {
        //                 condition: "few clouds",
        //                 icon: "http://openweathermap.org/img/wn/02d@2x.png"
        //             },
        //             high: 20,
        //             low: 10
        //         },
        //         {
        //             day: "Thu, June 11",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 19,
        //             low: 13
        //         },
        //         {
        //             day: "Fri, June 12",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 21,
        //             low: 13
        //         }
        //     ]
        // },
        // {
        //     _id: "5edd2a68c6a7016d3e2bfb4c",
        //     city: "Paris",
        //     date: "Sunday, June 7, 2020",
        //     temperature: 19,
        //     condition: {
        //         condition: "light rain",
        //         icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //     },
        //     wind: 1.5,
        //     humidity: 59,
        //     pressure: 1011,
        //     forecast: [
        //         {
        //             day: "Mon, June 8",
        //             condition: {
        //                 condition: "light rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 20,
        //             low: 11
        //         },
        //         {
        //             day: "Tue, June 9",
        //             condition: {
        //                 condition: "overcast clouds",
        //                 icon: "http://openweathermap.org/img/wn/04d@2x.png"
        //             },
        //             high: 17,
        //             low: 11
        //         },
        //         {
        //             day: "Wed, June 10",
        //             condition: {
        //                 condition: "few clouds",
        //                 icon: "http://openweathermap.org/img/wn/02d@2x.png"
        //             },
        //             high: 20,
        //             low: 10
        //         },
        //         {
        //             day: "Thu, June 11",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 19,
        //             low: 13
        //         },
        //         {
        //             day: "Fri, June 12",
        //             condition: {
        //                 condition: "moderate rain",
        //                 icon: "http://openweathermap.org/img/wn/10d@2x.png"
        //             },
        //             high: 21,
        //             low: 13
        //         }
        //     ]
        // }
    ];

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
          (error) => this.emitErrorSubject(error)
        );
    }
}
