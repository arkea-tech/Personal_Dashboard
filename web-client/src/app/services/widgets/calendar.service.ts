import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Calendar } from '../../models/Calendar.model';

@Injectable()
export class CalendarService {

    private calendarWidgets: Calendar[] = [];

    private apiURL: string = "http://localhost:8080/widget";

    public calendarSubject = new Subject<Calendar[]>();
    public errorSubject = new Subject<string>();

    emitCalendarSubject()
    {
        this.calendarSubject.next(this.calendarWidgets.slice());
    }

    emitErrorSubject(error)
    {
        this.errorSubject.next(error);
    }

    getCalendarWidgets()
    {
        this.http.get(`${this.apiURL}/calendar`).subscribe(
          (calendarWidgets: Calendar[]) => {
            if (calendarWidgets) {
              this.calendarWidgets = calendarWidgets;
              this.emitCalendarSubject();
            }
          },
          this.emitErrorSubject
        );
    }

    constructor(private http: HttpClient) {}
}
