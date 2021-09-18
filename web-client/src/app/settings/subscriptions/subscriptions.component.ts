import { Component, OnInit } from '@angular/core';

import { ManagedServicesService } from '../../services/managed-services.service';
import { ManagedServices } from '../../models/services/ManagedServices.model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

    public services: ManagedServices;

    constructor(private managedServices: ManagedServicesService) { }

    ngOnInit(): void {
        this.services = this.managedServices.services;
    }

}
