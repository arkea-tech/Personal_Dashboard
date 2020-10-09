import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Youtube } from '../../models/Youtube.model';

@Injectable()
export class YoutubeService {

    public youtubeWidgets: Youtube[] = [
        {
            _id: '324sdfmoih3',
            title: 'Stay See',
            picture: {
                high: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s800-c-k-c0xffffffff-no-rj-mo',
                    width: 480,
                    height: 360
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        },
        {
            _id: '324sdfmoihs3',
            title: 'Stay See',
            picture: {
                high: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s800-c-k-c0xffffffff-no-rj-mo',
                    width: 480,
                    height: 360
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        },
        {
            _id: '324sdfmoihz3',
            title: 'Stay See',
            picture: {
                high: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s800-c-k-c0xffffffff-no-rj-mo',
                    width: 480,
                    height: 360
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        high: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/hqdefault.jpg',
                            width: 480,
                            height: 360
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        }
    ];
    //public youtube$ = new Subject

    constructor(private http: HttpClient) {}
}
