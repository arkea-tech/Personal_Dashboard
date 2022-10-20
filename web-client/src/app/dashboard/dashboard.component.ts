import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { YoutubeService } from '../services/widgets/youtube.service';
import { WeatherService } from '../services/widgets/weather.service';
import { CalendarService } from '../services/widgets/calendar.service';

import { Youtube } from '../models/Youtube.model';
import { Weather } from '../models/Weather.model';
import { Calendar } from '../models/Calendar.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public loadingYoutube: boolean;
    public loadingWeather: boolean;

    public errorWeather: string;

    public youtubeWidgets: Youtube[] = [];
    public weatherWidgets: Weather[] = [];
    public calendarWidgets: Calendar[] = [];

    private youtubeSubscription: Subscription;
    private weatherSubscription: Subscription;
    private weatherErrorSubscription: Subscription;

    constructor(private youtubeService: YoutubeService,
    private weatherService: WeatherService,
    private calendarService: CalendarService) { }

    ngOnInit(): void {
        this.loadingYoutube = true;
        this.loadingWeather = true;
        this.youtubeSubscription = this.youtubeService.youtubeSubject.subscribe(
            (youtubeWidgets: Youtube[]) => {
                this.youtubeWidgets = youtubeWidgets;
                this.loadingYoutube = false;
            }
        );
        this.weatherSubscription = this.weatherService.weatherSubject.subscribe(
            (weatherWidgets: Weather[]) => {
                this.weatherWidgets = weatherWidgets;
                this.loadingWeather = false;
            }
        );
        this.weatherErrorSubscription = this.weatherService.errorSubject.subscribe(
            (error: string) => {
                this.errorWeather = error;
                this.loadingWeather = false;
            }
        );
        this.youtubeService.getYoutubeWidgets();
        this.weatherService.getWeatherWidgets();
        // this.weatherWidgets = this.weatherService.weatherWidgets;
        this.calendarWidgets = this.calendarService.calendarWidgets;
    }

    ngOnDestroy(): void
    {
        this.youtubeSubscription.unsubscribe();
        this.weatherSubscription.unsubscribe();
        this.weatherErrorSubscription.unsubscribe();
    }

}
