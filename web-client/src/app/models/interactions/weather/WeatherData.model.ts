export class WeatherData {

    city: string;
    unit: string;
    details: boolean;

    constructor(city: string, unit: string, details: boolean)
    {
        this.city = city;
        this.unit = unit;
        this.details = details;
    }
}
