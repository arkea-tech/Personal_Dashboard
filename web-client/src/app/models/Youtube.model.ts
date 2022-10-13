import { Video } from './Video.model';

export class Youtube {
    _id: string;
    title: string;
    picture: {
        default: {
            url: string,
            width: number,
            height: number
        },
        medium: {
            url: string,
            width: number,
            height: number
        },
        high: {
            url: string,
            width: number,
            height: number
        }
    };
    videos: Array<Video>;

    constructor(id) {
        this._id = id;
    }
};
