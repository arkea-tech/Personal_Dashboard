import { Event } from './Event.model';

export class Calendar {
    _id: string;
    view: string;
    events: Array<Event>;
};
