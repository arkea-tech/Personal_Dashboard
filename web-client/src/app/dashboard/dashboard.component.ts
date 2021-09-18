import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../services/widgets/youtube.service';
import { WeatherService } from '../services/widgets/weather.service';
import { Youtube } from '../models/Youtube.model';
import { Weather } from '../models/Weather.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public youtubeWidgets: Youtube[] = [];
    public weatherWidgets: Weather[] = [];

    constructor(private youtubeService: YoutubeService,
    private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.youtubeWidgets = this.youtubeService.youtubeWidgets;
        this.weatherWidgets = this.weatherService.weatherWidgets;
    }

}
