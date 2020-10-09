import { Forecast } from './Forecast.model';

export class Weather {
    _id: string;
    city: string;
    date: string;
    temperature: number;
    condition: Object;
    wind: Number;
    humidity: Number;
    pressure: Number;
    forecast: Array<Forecast>;
};
