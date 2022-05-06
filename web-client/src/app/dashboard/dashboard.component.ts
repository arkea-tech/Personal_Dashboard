import { Component, OnInit } from '@angular/core';

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

    public youtubeWidgets: Youtube[] = [];
    public weatherWidgets: Weather[] = [];
    public calendarWidgets: Calendar[] = [];

    constructor(private youtubeService: YoutubeService,
    private weatherService: WeatherService,
    private calendarService: CalendarService) { }

    ngOnInit(): void {
        this.youtubeWidgets = this.youtubeService.youtubeWidgets;
        this.weatherWidgets = this.weatherService.weatherWidgets;
        this.calendarWidgets = this.calendarService.calendarWidgets;
    }

}
