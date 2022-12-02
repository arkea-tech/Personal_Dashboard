import { Forecast } from './Forecast.model';

export class Weather {
    _id: string;
    unit: string;
    city: string;
    date: string;
    temperature: number;
    condition: {
        condition: string;
        icon: string;
    };
    wind: Number;
    humidity: Number;
    pressure: Number;
    forecast: Array<Forecast>;
};
