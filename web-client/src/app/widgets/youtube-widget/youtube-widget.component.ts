import { Component, OnInit, Input } from '@angular/core';

import { Youtube } from '../../models/Youtube.model';

@Component({
  selector: 'app-youtube-widget',
  templateUrl: './youtube-widget.component.html',
  styleUrls: ['./youtube-widget.component.scss']
})
export class YoutubeWidgetComponent implements OnInit {

        //replace any by YouTube
        @Input() youtubeWidget: Youtube;

        constructor() { }

        ngOnInit(): void {
        }

}
