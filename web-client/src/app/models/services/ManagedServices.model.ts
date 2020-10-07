import { Service } from './Service.model';

export class ManagedServices {
    client: {
        host: string
    };
    server: {
        current_time: number;
        services: Array<Service>;
    };
};
