import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import UIkit from "uikit/dist/js/uikit.min.js";

import {redirectTo } from '../../../utils/navigation';
import wait from '../../../utils/wait';

import { Calendar } from '../../models/Calendar.model';
import { Weather } from '../../models/Weather.model';
import { Youtube } from '../../models/Youtube.model';

import { YoutubeService } from '../../services/widgets/youtube.service';
import { WeatherService } from '../../services/widgets/weather.service';

@Component({
  selector: 'app-edit-delete-widget',
  templateUrl: './edit-delete-widget.component.html',
  styleUrls: ['./edit-delete-widget.component.scss']
})
export class EditDeleteWidgetComponent implements OnInit {

    public loading: boolean;
    public errorMessage:string;
    public successfulMessage:string;

    @Input() editForm: string;
    @Input() calendarWidget: Calendar;
    @Input() weatherWidget: Weather;
    @Input() youtubeWidget: Youtube;

    constructor(private youtubeService: YoutubeService, private weatherService: WeatherService, private router: Router) {
    }

    ngOnInit(): void {
    }

    closeModal():void
    {
        UIkit.modal('#modal-delete-widget-confirm-' + this.editForm).hide();
        this.successfulMessage = "";
        this.errorMessage = "";
        redirectTo('/main/dashboard', this.router);
    }

    assignDeleteWidget()
    {
        let deleteWidget = null;

        if (this.youtubeWidget)
            deleteWidget = this.youtubeService.deleteYoutubeWidget(this.youtubeWidget._id);
        if (this.weatherWidget)
            deleteWidget = this.weatherService.deleteWeatherWidget(this.weatherWidget._id);
        return deleteWidget;
    }

    onDeleteWidget():void
    {
        let deleteWidget = null;

        this.loading = true;
        deleteWidget = this.assignDeleteWidget();
        deleteWidget.then(
          (response) => {
            this.loading = false;
            this.successfulMessage = response.message;
            wait(1000).then(
                () => this.closeModal()
            );
          }
        ).catch(
          (error) => {
              this.loading = false;
              this.errorMessage = error.message;
          }
        );
    }

}
