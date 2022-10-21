import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { clearForm } from '../../../../../utils/form';

import { YoutubeData } from '../../../../models/interactions/youtube/YoutubeData.model';
import { SecondStep } from '../../../../models/interactions/youtube/SecondStep.model';

import { YoutubeService } from '../../../../services/widgets/youtube.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss']
})
export class StepTwoFormComponent implements OnInit {

    @Input() category: string;

    public loading: boolean;
    public errorMessage: string;

    clearForm: (form: NgForm) => void;
    // filter: string;
    // channel: string;

    constructor(private youtubeService: YoutubeService, private router: Router) {
        this.clearForm = clearForm;
    }

    ngOnInit(): void {
    }

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([uri]));
    }

    onSubmitStep2(form: NgForm)
    {
        const secondStep: SecondStep = new SecondStep(form.value["channel"], form.value["filter"]);
        const youtubeData: YoutubeData = new YoutubeData(this.category, secondStep);

        this.loading = true;

        this.youtubeService.createYoutubeWidget(youtubeData).then(
            () => {
                this.clearForm(form);
                this.loading = false;
                this.redirectTo('/main/dashboard');
            }
        ).catch(
            (error) => {
                this.loading = false;
                this.errorMessage = error.message;
            }
        );
    }

}
