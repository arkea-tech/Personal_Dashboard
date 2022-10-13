import { Component, OnInit, Input } from '@angular/core';
import { Calendar } from '../../models/Calendar.model';
import { Weather } from '../../models/Weather.model';
import { Youtube } from '../../models/Youtube.model';

@Component({
  selector: 'app-edit-delete-widget',
  templateUrl: './edit-delete-widget.component.html',
  styleUrls: ['./edit-delete-widget.component.scss']
})
export class EditDeleteWidgetComponent implements OnInit {

    @Input() editForm: string;
    @Input() calendarWidget: Calendar;
    @Input() weatherWidget: Weather;
    @Input() youtubeWidget: Youtube;

    constructor() {
    }

    ngOnInit(): void {
    }

}
