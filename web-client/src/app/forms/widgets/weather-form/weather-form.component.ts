import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

    @Input() mode: string;
    
    weatherForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

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

    onSubmitForm()
    {
        const formValue = this.weatherForm.value;

        this.clearForm();
        console.log(formValue);
    }

}
