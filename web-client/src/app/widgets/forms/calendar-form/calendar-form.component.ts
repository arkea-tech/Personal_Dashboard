import { Component, OnInit, Input } from '@angular/core';
import { Calendar } from '../../../models/Calendar.model';
import { NgForm } from '@angular/forms';

import { clearForm } from '../../../../utils/form';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.scss']
})
export class CalendarFormComponent implements OnInit {

    @Input() mode: string;
    @Input() calendarWidget: Calendar;

    clearForm: (form: NgForm) => void;

    constructor() { }

    ngOnInit(): void {
        this.clearForm = clearForm;
    }

    onSubmitForm(form: NgForm)
    {
        let view: string = "";
        let events: boolean = false;

        view = form.value["view"];
        events = !form.value["events"] ? false : form.value["events"];
        this.clearForm(form);
        console.log("view: " + view + " events: " + events);
    }

}
