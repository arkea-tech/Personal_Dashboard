import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

    //replace any by Weather
    @Input() weatherWidget: any;

    constructor() { }

    ngOnInit(): void {
    }

}
