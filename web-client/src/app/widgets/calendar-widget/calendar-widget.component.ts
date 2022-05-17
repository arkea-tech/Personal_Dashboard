import { Component, OnInit, Output, Input } from '@angular/core';
import { Calendar } from '../../models/Calendar.model';
import { Event } from '../../models/Event.model';
const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss']
})
export class CalendarWidgetComponent implements OnInit {

    @Input() calendarWidget: Calendar;
    events: Array<Event>;
    dates: Array<any>;
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    daysFull = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    date = new Date();
    currentDate = new Date();
    currentDateIndex = 0;
    weekRange = { firstDay: 0, lastDay: 7 };
    dayRange = { first: 0, last: 1 };

    constructor()
    {
    }

    ngOnInit(): void {
        this.events = this.calendarWidget.events;
        this.dates = this.getDays(this.date);
        this.setCurrentDate();
    }

    getBackgroundColor(colorId)
    {
        let colorCode = null;

        switch (colorId) {
            case '1':
                colorCode = "#7986cb";
                break;
            case '2':
                colorCode = "#33b679";
                break;
            case '3':
                colorCode = "#8e24aa";
                break;
            case '4':
                colorCode = "#e67c73";
                break;
            case '5':
                colorCode = "#f6c026";
                break;
            case '6':
                colorCode = "#f5511d";
                break;
            case '7':
                colorCode = "#039be5";
                break;
            case '8':
                colorCode = "#616161";
                break;
            case '9':
                colorCode = "#3f51b5";
                break;
            case '10':
                colorCode = "#0b8043";
                break;
            case '11':
                colorCode = "#d60000";
                break;
            default:
                colorCode = "#039be5";
                break;
        }
        return colorCode;
    }

    ellipsify(str, lengthMax)
    {
        if (str.length > lengthMax) {
            return (str.substring(0, lengthMax) + "...");
        } else {
            return str;
        }
    }

    setCurrentDate() {
        let startIndex = null;
        let currentDateIndex = null;

        this.dates.forEach((date, i) => {
            if (date.date.getDate() === this.currentDate.getDate() - this.currentDate.getDay() + 1 && !startIndex)
                startIndex = i;
            if (date.date.getDate() === this.currentDate.getDate() && !currentDateIndex)
                currentDateIndex = i;
        });
        this.weekRange = { firstDay: startIndex, lastDay: startIndex + 7 };
        this.dayRange = {
            first: this.currentDate.getDay() - 1 < 0 ? 5 : this.currentDate.getDay() - 1,
            last: this.currentDate.getDay() - 1 < 0 ? 6 : this.currentDate.getDay()
        };
        this.currentDateIndex = currentDateIndex;
    }

    setCurrentMonth()
    {
        const [year, month] = [this.currentDate.getFullYear(), this.currentDate.getMonth()];

        this.date = new Date(year, month, 1);
        this.dates = this.getDays(this.date);
        this.setCurrentDate();
    }

    setMonth(inc)
    {
        const [year, month] = [this.date.getFullYear(), this.date.getMonth()];

        this.date = new Date(year, month + inc, 1);
        this.dates = this.getDays(this.date);
    }

    setWeek(inc)
    {
        let firstLastDay: Date;
        let i = 0;

        this.weekRange.firstDay += inc;
        this.weekRange.lastDay += inc;
        if (this.weekRange.firstDay < 0) {
            firstLastDay = this.dates[0].date;
            this.setMonth(-1);
            for (i = this.dates.length - 1; this.dates[i].date.getDate() != firstLastDay.getDate(); i--);
            this.weekRange = { firstDay: i - 7, lastDay: i };
        }
        if (this.weekRange.lastDay > this.dates.length - 1) {
            firstLastDay = this.dates[this.weekRange.lastDay - 7].date;
            this.setMonth(+1);
            for (i = 0; this.dates[i].date.getDate() != firstLastDay.getDate(); i++);
            this.weekRange = { firstDay: i, lastDay: i + 7 };
        }
    }

    setDay(inc)
    {

        let firstLastDay: Date;
        let i = 0;

        this.dayRange.first += inc;
        this.dayRange.last += inc;
        this.currentDateIndex += inc;
        if (this.dayRange.first < 0)
            this.dayRange = { first: this.daysFull.length - 1, last: this.daysFull.length }
        if (this.dayRange.last > 7)
            this.dayRange = { first: 0, last: 1 }
        if (this.currentDateIndex < 0) {
            firstLastDay = this.dates[0].date;
            this.setMonth(-1);
            for (i = this.dates.length - 1; this.dates[i].date.getDate() != firstLastDay.getDate(); i--);
            this.currentDateIndex = i - 1;
        }
        if (this.currentDateIndex > this.dates.length - 1) {
            firstLastDay = this.dates[this.currentDateIndex - 7].date;
            this.setMonth(+1);
            for (i = 0; this.dates[i].date.getDate() != firstLastDay.getDate(); i++);
            this.currentDateIndex = i + 7;
        }
    }

    isSameMonth(date)
    {
        return date.getMonth() === this.date.getMonth();
    }

    isSameDate(date)
    {
        return date.toDateString() === this.currentDate.toDateString();
    }

    checkEventsInDate(date)
    {
        let eventDate = null;
        let events = [];

        for (const event of this.events) {
            eventDate = new Date(event.time.start_date);

            if (eventDate.toDateString() === date.toDateString()) {
                events.push({
                    title: event.title,
                    colorId: event.colorId
                });
            }
        }
        return {
            date: date,
            events: events
        };
    }

    private getStartDay(date = new Date)
    {
        const [year, month] = [date.getFullYear(), date.getMonth()];
        const firstDayOfMonth = new Date(year, month, 1).getTime();

        return this.range(1, 7).map(num => new Date(firstDayOfMonth - DAY_MS * num)).find(dt => dt.getDay() === 1);
    }

    private getDays(date = new Date)
    {
        const calendarStartTime = this.getStartDay(date).getTime() + 60 * 60 * 2 * 1000;

        return this.range(0, 41).map(num => {
            let date = new Date(calendarStartTime + DAY_MS * num);

            return this.checkEventsInDate(date);
        });
    }

    private range(start, end, length = end - start + 1)
    {
        return Array.from({ length }, (_, i) => start + i);
    }

}
