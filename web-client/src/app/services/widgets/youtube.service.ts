import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Youtube } from '../../models/Youtube.model';
import { YoutubeData } from '../../models/interactions/youtube/YoutubeData.model';

import { Success } from '../../models/http/response';

@Injectable()
export class YoutubeService {

    private youtubeWidgets: Youtube[] = [];

    private apiURL: string = "http://localhost:8080/widget";

    public youtubeSubject = new Subject<Youtube[]>();
    public errorSubject = new Subject<string>();

    constructor(private http: HttpClient) {}

    emitYoutubeSubject()
    {
        this.youtubeSubject.next(this.youtubeWidgets.slice());
    }

    emitErrorSubject(error)
    {
        this.errorSubject.next(error);
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
          this.emitErrorSubject
        );
    }

    createYoutubeWidget(youtubeData: YoutubeData)
    {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.apiURL}/youtube`, youtubeData).subscribe(
                (response: Success) => {
                  resolve(response);
                },
                (error) => {
                  reject(error);
                }
            );
        });
    }

    deleteYoutubeWidget(id: string) {
        return new Promise((resolve, reject) => {
          this.http.delete(`${this.apiURL}/youtube/` + id).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
    }
}
