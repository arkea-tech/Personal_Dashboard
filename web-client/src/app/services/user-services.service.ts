import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Service } from '../models/services/Service.model';

@Injectable()
export class UserServicesService {
    public services: Service[] = [
        {
            name: "Entertainment",
            widgets: [
                {
                    name: "YouTube Videos",
                    description: "Display your favorite YouTube channels, liked and most popular videos.",
                    params: [
                        {
                            name: "categories",
                            type: "string"
                        },
                        {
                            name: "channel",
                            type: "string"
                        },
                        {
                            name: "filter",
                            type: "string"
                        }
                    ]
                },
                {
                    name: "Music Player",
                    description: "Choose and play your favorite songs instantly.",
                    params: [
                        {
                            name: "track",
                            type: "string"
                        }
                    ]
                }
            ]
        },
        {
            name: "Productivity",
            widgets: [
                {
                    name: "Weather",
                    description: "Take a look at the weather wherever you are and whatever you do.",
                    params: [
                        {
                            name: "city",
                            type: "string"
                        },
                        {
                            name: "unit",
                            type: "string"
                        },
                        {
                            name: "details",
                            type: "boolean"
                        }
                    ]
                },
                {
                    name: "Calendar",
                    description: "Never forget an important meeting or schedule with this quick events and calendar display.",
                    params: [
                        {
                            name: "view",
                            type: "string"
                        },
                        {
                            name: "events",
                            type: "boolean"
                        }
                    ]
                }
            ]
        }
    ]
}
