import { Component, OnInit } from '@angular/core';

import { UserServicesService } from '../services/user-services.service';
import { AuthService } from '../services/auth.service';
import { Service } from '../models/services/Service.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public services: Service[] = [];

    constructor(private userServices: UserServicesService, private authService: AuthService) { }

    ngOnInit(): void {
        this.services = this.userServices.services;
    }

    logout() {
        this.authService.logout();
    }

}
