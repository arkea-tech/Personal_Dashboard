import { Component, OnInit, Output, EventEmitter } from '@angular/core';
const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss']
})
export class CalendarWidgetComponent implements OnInit {

    dates: Array<Date>;
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    date = new Date();
    @Ouput() selected = new EventEmitter();

    constructor()
    {
        this.dates = this.getDays(this.date);
    }

    ngOnInit(): void
    {
    }

    setMonth(inc)
    {
        const [year, month] = [this.date.getFullYear(), this.date.getMonth()];

        this.date = new Date(year, month + inc, 1);
        this.dates = this.getDays(this.date);
    }

    isSameMonth(date)
    {
        return date.getMonth() === this.date.getMonth();
    }

    getStartDay(date = new Date)
    {
        const [year, month] = [date.getFullYear(), date.getMonth()];
        const firstDayOfMonth = new Date(year, month, 1).getTime();

        return this.range(1, 7).map(num => new Date(firstDayOfMonth - DAY_MS * num)).find(dt => dt.getDay() === 0);
    }

    getDays(date = new Date)
    {
        const calendarStartTime = this.getStartDay(date).getTime();

        return this.range(0, 41).map(num => new Date(calendarStartTime + DAY_MS * num));
    }

    range(start, end, length = end - start + 1)
    {
        return Array.from({ length }, (_, i) => start + i);
    }

}
