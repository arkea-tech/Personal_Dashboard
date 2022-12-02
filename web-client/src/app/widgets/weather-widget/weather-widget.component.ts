import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../models/Weather.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

    //replace any by Weather
    @Input() weatherWidget: Weather;

    constructor() { }

    ngOnInit(): void {}

}
