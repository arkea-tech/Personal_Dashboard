import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.scss']
})
export class StepOneFormComponent implements OnInit {

    category: string;

    constructor() { }

    ngOnInit(): void {
    }

    onSubmitStep1(form: NgForm)
    {
        this.category = form.value["category"];
    }

}
