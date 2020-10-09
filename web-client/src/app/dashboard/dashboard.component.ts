import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../services/widgets/youtube.service';
import { Youtube } from '../models/Youtube.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public youtubeWidgets: Youtube[] = [];

    constructor(private youtubeService: YoutubeService) { }

    ngOnInit(): void {
        this.youtubeWidgets = this.youtubeService.youtubeWidgets;
    }

}
