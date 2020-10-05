import { Component, OnInit } from '@angular/core';

import { WidgetService } from '../services/widget.service';
import { Youtube } from '../models/Youtube.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public youtubeVideos: Youtube[] = [];

    constructor(private widgetService: WidgetService) { }

    ngOnInit(): void {
        this.youtubeVideos = this.widgetService.youtubeVideos;
    }

}
