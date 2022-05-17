import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss']
})
export class StepTwoFormComponent implements OnInit {

    @Input() category: string;
    filter: string;
    channel: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmitStep2(form: NgForm)
    {
        let filter: string = "";
        let channel: string = "";

        filter = form.value["filter"];
        channel = form.value["channel"];
        console.log("category: " + this.category + " channel: " + channel + " " + "filter: " + filter);
    }

}
