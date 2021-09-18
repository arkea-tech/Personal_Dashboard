import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Weather } from '../../models/Weather.model';

@Injectable()
export class WeatherService {

    public weatherWidgets: Weather[] = [
        {
            _id: "5edd2a68c6a7016d3e2bfb4c",
            city: "Paris",
            date: "Sunday, June 7, 2020",
            temperature: 19,
            condition: {
                condition: "light rain",
                icon: "http://openweathermap.org/img/wn/10d@2x.png"
            },
            wind: 1.5,
            humidity: 59,
            pressure: 1011,
            forecast: [
                {
                    day: "Monday, June 8",
                    condition: {
                        condition: "light rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 20,
                    low: 11
                },
                {
                    day: "Tuesday, June 9",
                    condition: {
                        condition: "overcast clouds",
                        icon: "http://openweathermap.org/img/wn/04d@2x.png"
                    },
                    high: 17,
                    low: 11
                },
                {
                    day: "Wednesday, June 10",
                    condition: {
                        condition: "few clouds",
                        icon: "http://openweathermap.org/img/wn/02d@2x.png"
                    },
                    high: 20,
                    low: 10
                },
                {
                    day: "Thursday, June 11",
                    condition: {
                        condition: "moderate rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 19,
                    low: 13
                },
                {
                    day: "Friday, June 12",
                    condition: {
                        condition: "moderate rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 21,
                    low: 13
                }
            ]
        },
        {
            _id: "5edd2a68c6a7016d3e2bfb4c",
            city: "Paris",
            date: "Sunday, June 7, 2020",
            temperature: 19,
            condition: {
                condition: "light rain",
                icon: "http://openweathermap.org/img/wn/10d@2x.png"
            },
            wind: 1.5,
            humidity: 59,
            pressure: 1011,
            forecast: [
                {
                    day: "Monday, June 8",
                    condition: {
                        condition: "light rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 20,
                    low: 11
                },
                {
                    day: "Tuesday, June 9",
                    condition: {
                        condition: "overcast clouds",
                        icon: "http://openweathermap.org/img/wn/04d@2x.png"
                    },
                    high: 17,
                    low: 11
                },
                {
                    day: "Wednesday, June 10",
                    condition: {
                        condition: "few clouds",
                        icon: "http://openweathermap.org/img/wn/02d@2x.png"
                    },
                    high: 20,
                    low: 10
                },
                {
                    day: "Thursday, June 11",
                    condition: {
                        condition: "moderate rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 19,
                    low: 13
                },
                {
                    day: "Friday, June 12",
                    condition: {
                        condition: "moderate rain",
                        icon: "http://openweathermap.org/img/wn/10d@2x.png"
                    },
                    high: 21,
                    low: 13
                }
            ]
        }
    ];

    constructor(private http: HttpClient) {}
}
