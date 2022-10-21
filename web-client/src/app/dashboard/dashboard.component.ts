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
    public loadingCalendar: boolean;

    public errorYoutube: string;
    public errorWeather: string;
    public errorCalendar: string;

    public youtubeWidgets: Youtube[] = [];
    public weatherWidgets: Weather[] = [];
    public calendarWidgets: Calendar[] = [];

    private youtubeSubscription: Subscription;
    private weatherSubscription: Subscription;
    private calendarSubscription: Subscription;
    private youtubeErrorSubscription: Subscription;
    private weatherErrorSubscription: Subscription;
    private calendarErrorSubscription: Subscription;

    constructor(private youtubeService: YoutubeService,
    private weatherService: WeatherService,
    private calendarService: CalendarService) { }


    subscribeServicesWidgets():void
    {
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
        this.calendarSubscription = this.calendarService.calendarSubject.subscribe(
            (calendarWidgets: Calendar[]) => {
                this.calendarWidgets = calendarWidgets;
                this.loadingCalendar = false;
            }
        );
    }

    subscribeServicesError():void
    {
        this.youtubeErrorSubscription = this.youtubeService.errorSubject.subscribe(
            (error: string) => {
                this.errorYoutube = error;
                this.loadingYoutube = false;
            }
        );
        this.weatherErrorSubscription = this.weatherService.errorSubject.subscribe(
            (error: string) => {
                this.errorWeather = error;
                this.loadingWeather = false;
            }
        );
        this.calendarErrorSubscription = this.calendarService.errorSubject.subscribe(
            (error: string) => {
                this.errorCalendar = error;
                this.loadingCalendar = false;
            }
        );
    }

    ngOnInit(): void {
        this.loadingYoutube = true;
        this.loadingWeather = true;
        this.loadingCalendar = true;
        this.subscribeServicesWidgets();
        this.subscribeServicesError();
        this.youtubeService.getYoutubeWidgets();
        this.weatherService.getWeatherWidgets();
        this.calendarService.getCalendarWidgets();
    }

    ngOnDestroy(): void
    {
        this.youtubeSubscription.unsubscribe();
        this.weatherSubscription.unsubscribe();
        this.calendarSubscription.unsubscribe();
        this.youtubeErrorSubscription.unsubscribe();
        this.weatherErrorSubscription.unsubscribe();
        this.calendarErrorSubscription.unsubscribe();
    }

}
