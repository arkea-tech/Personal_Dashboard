import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import UIkit from "uikit/dist/js/uikit.min.js";

import { clearForm } from '../../../../../utils/form';
import wait from '../../../../../utils/wait';

import { YoutubeData } from '../../../../models/interactions/youtube/YoutubeData.model';
import { SecondStep } from '../../../../models/interactions/youtube/SecondStep.model';
import { Success } from '../../../../models/http/response';

import { YoutubeService } from '../../../../services/widgets/youtube.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss']
})
export class StepTwoFormComponent implements OnInit {

    @Input() category: string;
    @Input() youtubeWidgetId: string;

    public loading: boolean;
    public errorMessage: string;
    public successfulMessage: string;

    clearForm: (form: NgForm) => void;
    // filter: string;
    // channel: string;

    constructor(private youtubeService: YoutubeService, private router: Router) {
        this.clearForm = clearForm;
    }

    ngOnInit(): void {}

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate([uri]));
    }

    closeModal(form: NgForm):void
    {
        UIkit.modal('#modal-youtube-step-2-' + this.youtubeWidgetId).hide();
        this.clearForm(form);
        this.successfulMessage = "";
        this.errorMessage = "";
        this.redirectTo('/main/dashboard');
    }

    onSubmitStep2(form: NgForm)
    {
        const secondStep: SecondStep = new SecondStep(form.value["channel"], form.value["filter"]);
        const youtubeData: YoutubeData = new YoutubeData(this.category, secondStep);

        this.loading = true;
        console.log('here');
        console.log(secondStep);
        console.log(youtubeData);
        this.youtubeService.createYoutubeWidget(youtubeData).then(
            (response: Success) => {
                this.successfulMessage = response.message;
                this.loading = false;
                wait(1000).then(
                    () => this.closeModal(form)
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
