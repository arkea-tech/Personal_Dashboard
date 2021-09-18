import { Component, OnInit } from '@angular/core';

import { UserServicesService } from '../services/user-services.service';
import { Service } from '../models/services/Service.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public services: Service[] = [];

    constructor(private userServices: UserServicesService) { }

    ngOnInit(): void {
        this.services = this.userServices.services;
    }

}
