import { Component, OnInit, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Youtube } from '../../../../models/Youtube.model';

import { clearForm } from '../../../../../utils/form';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.scss']
})
export class StepOneFormComponent implements OnInit {

    @Input() mode: string;
    @Input() youtubeWidget: Youtube;

    clearForm: (form: NgForm) => void;
    category: string;

    constructor() {
        this.clearForm = clearForm;
    }

    ngOnInit(): void {
        this.youtubeWidget = this.youtubeWidget ? this.youtubeWidget : new Youtube("default");
    }

    onSubmitStep1(form: NgForm)
    {
        this.category = form.value["category"];
        this.clearForm(form);
    }

}
