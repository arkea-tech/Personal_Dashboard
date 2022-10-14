import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Calendar } from '../../models/Calendar.model';

@Injectable()
export class CalendarService {

    public calendarWidgets: Calendar[] = [
        {
            _id: '324sdfmoih3',
            view: 'day',
            events: [
                {
                    title: '11h30 rdv coaching',
                    colorId: null,
                    time: {
                        start_date: "2022-04-26T09:30:00+02:00",
                        end_date: "2022-04-26T10:30:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire au tepitech !',
                    colorId: '4',
                    time: {
                        start_date: "2022-05-10T11:00:00+02:00",
                        end_date: "2022-05-10T12:00:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire à l\'atelier cinéma !',
                    colorId: '4',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },

                {
                    title: 'S\'inscrire à l\'atelier cinéma !',
                    colorId: '4',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },

                {
                    title: 'S\'inscrire à l\'atelier gogo !',
                    colorId: '11',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire à l\'atelier haha !',
                    colorId: '10',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire à l\'atelier test !',
                    colorId: '8',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire à l\'atelier cinéma !',
                    colorId: '4',
                    time: {
                        start_date: "2022-05-10T13:00:00+02:00",
                        end_date: "2022-05-10T15:00:00+02:00"
                    }
                },
                {
                    title: 'IT MCA(demain de 10h à 11h)',
                    colorId: '11',
                    time: {
                        start_date: "2022-05-11T17:00:00+02:00",
                        end_date: "2022-05-11T18:00:00+02:00"
                    }
                },
                {
                    title: 'Un évènement test',
                    colorId: '7',
                    time: {
                        start_date: "2022-10-14T17:00:00+02:00",
                        end_date: "2022-10-14T18:00:00+02:00"
                    }
                }
            ]
        },
        {
            _id: 'sdkjlsdfj238f',
            view: 'month',
            events: [
                {
                    title: '11h30 rdv coaching',
                    colorId: null,
                    time: {
                        start_date: "2022-04-26T09:30:00+02:00",
                        end_date: "2022-04-26T10:30:00+02:00"
                    }
                },
                {
                    title: 'S\'inscrire au tepitech !',
                    colorId: '4',
                    time: {
                        start_date: "2022-06-10T11:00:00+02:00",
                        end_date: "2022-06-10T12:00:00+02:00"
                    }
                },
                {
                    title: 'IT MCA(demain de 10h à 11h)',
                    colorId: '11',
                    time: {
                        start_date: "2022-06-11T17:00:00+02:00",
                        end_date: "2022-06-11T18:00:00+02:00"
                    }
                }
            ]
        }
    ];

    constructor(private http: HttpClient) {}
}
