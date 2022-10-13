import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { clearForm } from '../../../../../utils/form';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss']
})
export class StepTwoFormComponent implements OnInit {

    @Input() category: string;

    clearForm: (form: NgForm) => void;
    // filter: string;
    // channel: string;

    constructor() {
        this.clearForm = clearForm;
    }

    ngOnInit(): void {
    }

    onSubmitStep2(form: NgForm)
    {
        let filter: string = "";
        let channel: string = "";

        filter = form.value["filter"];
        channel = form.value["channel"];
        this.clearForm(form);
        console.log("category: " + this.category + " channel: " + channel + " " + "filter: " + filter);
    }

}
