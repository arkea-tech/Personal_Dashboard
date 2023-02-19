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

    @Input() setErrorWidget: (error: string) => void;
    @Input() setLoadingWidget: (isLoading: boolean) => void;
    @Input() setSuccessfulMessageWidget: (message: string) => void;

    // public loading: boolean;
    // public errorMessage: string;
    // public successfulMessage: string;

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

    clearFormData(): void
    {
        this.clearForm();
        //this.setErrorWidget("");
        //this.setSuccessfulMessageWidget("");
        redirectTo('/main/dashboard', this.router);
    }

    onSubmitForm()
    {
        const formValue = this.weatherForm.value;
        const weatherData: WeatherData = new WeatherData(formValue["city"], formValue["unit"], formValue["details"]);

        this.setLoadingWidget(true);
        this.weatherService.createWeatherWidget(weatherData).then(
            (response: Success) => {
                this.setLoadingWidget(false);
                this.setSuccessfulMessageWidget(response.message); this.clearFormData();
                // wait(1000).then(
                //     () => this.clearFormData()
                // );
            }
        ).catch(
            (error) => {
                this.setLoadingWidget(false);
                this.setErrorWidget(error.message);
                //this.clearFormData()
                // wait(1000).then(
                //     () => this.clearFormData()
                // );
            }
        );
    }

}
