import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.scss']
})
export class CalendarFormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onSubmitForm(form: NgForm)
    {
        let view: string = "";
        let events: boolean = false;

        view = form.value["view"];
        events = form.value["events"];
        console.log("view: " + view + " events: " + events);
    }

}
