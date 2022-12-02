import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import UIkit from "uikit/dist/js/uikit.min.js";

import {redirectTo} from '../../../../utils/navigation';
import wait from '../../../../utils/wait';

import { WeatherService } from '../../../services/widgets/weather.service';

import { Weather } from '../../../models/Weather.model';
import { WeatherData } from '../../../models/interactions/weather/WeatherData.model';
import { Success } from '../../../models/http/response';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

    @Input() mode: string;
    @Input() weatherWidget: Weather;

    public loading: boolean;
    public errorMessage: string;
    public successfulMessage: string;

    weatherForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private weatherService: WeatherService, private router: Router) {}

    clearForm()
    {
        this.weatherForm.reset();
    }

    ngOnInit(): void {
        this.weatherForm = this.formBuilder.group({
            city: [null, Validators.required],
            unit: [null, Validators.required],
            details: false
        });
    }

    closeModal():void
    {
        let weatherModalId = this.mode === "edition" ? "#modal-edit-widget-weather-forecast-" + this.weatherWidget._id : "#modal-weather";

        UIkit.modal(weatherModalId).hide();
        this.clearForm();
        this.successfulMessage = "";
        this.errorMessage = "";
        //this.router.navigate(['/main/about']);
        redirectTo('/main/dashboard', this.router);
    }

    onSubmitForm()
    {
        const formValue = this.weatherForm.value;
        const weatherData: WeatherData = new WeatherData(formValue["city"], formValue["unit"], formValue["details"]);

        this.loading = true;
        this.weatherService.createWeatherWidget(weatherData).then(
            (response: Success) => {
                this.successfulMessage = response.message;
                this.loading = false;
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
