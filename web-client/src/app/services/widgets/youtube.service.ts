import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Youtube } from '../../models/Youtube.model';

@Injectable()
export class YoutubeService {

    private youtubeWidgets: Youtube[] = [];

    private apiURL: string = "http://localhost:8080/widget";

    public youtubeSubject = new Subject<Youtube[]>();

    constructor(private http: HttpClient) {}

    emitYoutubeSubject()
    {
        this.youtubeSubject.next(this.youtubeWidgets.slice());
    }

    getYoutubeWidgets()
    {
        this.http.get(`${this.apiURL}/youtube`).subscribe(
          (youtubeWidgets: Youtube[]) => {
            if (youtubeWidgets) {
              this.youtubeWidgets = youtubeWidgets;
              this.emitYoutubeSubject();
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
}
