import { Component, OnInit, Input } from '@angular/core';

import ellipsify from '../../../utils/ellipsify';

import { Youtube } from '../../models/Youtube.model';

@Component({
  selector: 'app-youtube-widget',
  templateUrl: './youtube-widget.component.html',
  styleUrls: ['./youtube-widget.component.scss']
})
export class YoutubeWidgetComponent implements OnInit {

    @Input() youtubeWidget: Youtube;

    ellipsify: (str: string, lengthMax: number) => string;

    constructor() {
        this.ellipsify = ellipsify;
    }

    ngOnInit(): void {
    }

}
