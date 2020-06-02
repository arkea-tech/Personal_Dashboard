const Youtube = require('../../models/widgets/youtube');
const google = require('googleapis').google;
const { handleChannelInfos, handleVideosInfos } = require('./handlers/youtubeHandler');
const { getChannelInfos, getUploads, getMostPopularUploads, getVideosDetails } = require('./fetchers/youtubeFetcher');

exports.createWidget = (req, res, next) => {
    // const thing = new Thing({
    //     title: req.body.title,
    //     description: req.body.description,
    //     imageUrl: req.body.imageUrl,
    //     price: req.body.price,
    //     userId: req.body.userId
    // });
    //
    // thing.save().then(
    //     () => {
    //         res.status(201).json({
    //             message: 'Post saved successfully !'
    //         });
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
}

exports.deleteWidget = (req, res, next) => {
    // Thing.deleteOne({_id: req.params.id}).then(
    //     () => {
    //         res.status(200).json({ message: 'Deleted !'});
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
}

exports.getWidget = (req, res, next) => {
    // Thing.findOne({
    //     _id: req.params.id
    // }).then(
    //     (thing) => {
    //         res.status(200).json(thing);
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(404).json({
    //             error: error
    //         });
    //     }
    // );
}

exports.modifyWidget = (req, res, next) => {
    // const thing = new Thing({
    //     _id: req.params.id,
    //     title: req.body.title,
    //     description: req.body.description,
    //     imageUrl: req.body.imageUrl,
    //     price: req.body.price,
    //     userId: req.body.userId
    // });
    //
    // Thing.updateOne({_id: req.params.id}, thing).then(
    //     () => {
    //         res.status(201).json({
    //             message: 'Thing updated successfully !'
    //         });
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
}

// function getChannelInfos(service, channelName)
// {
//     var channels = [];
//     const promise = new Promise((resolve, reject) => {
//         service.channels.list({
//             auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
//             forUsername: channelName,
//             part: 'snippet,contentDetails'
//         }).then(response => {
//             channels = response.data.items;
//             resolve({
//                 relatedPlaylists: channels[0].contentDetails.relatedPlaylists,
//                 thumbnails: channels[0].snippet.thumbnails,
//                 title: channels[0].snippet.title
//             });
//         }).catch(
//             (error) => {
//                 reject(error);
//                 // res.status(400).json({
//                 //      error: error
//                 // });
//             }
//         );
//     });
//
//     return promise;
// }
//
// function getUploads(service, playlistId)
// {
//     const promise = new Promise((resolve, reject) => {
//         service.playlistItems.list({
//             auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
//             playlistId: playlistId,
//             part: 'snippet,contentDetails',
//             maxResults: 25
//         }).then(response => {
//             resolve(response.data.items);
//         }).catch(
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
//
//     return promise;
// }
//
// function getMostPopularUploads(service)
// {
//     let datas = {
//         uploads: null
//     };
//
//     const promise = new Promise((resolve, reject) => {
//         service.searchResult.list({
//             auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
//             playlistId: 'UU5nc_ZtjKW1htCVZVRxlQAQ',
//             part: 'snippet',
//             maxResults: 25,
//             channelId: 'UC5nc_ZtjKW1htCVZVRxlQAQ',
//             order: 'viewCount',
//             type: 'video'
//         }).then(response => {
//             datas = {
//                 uploads: response.data.items
//             };
//             resolve(datas);
//         }).catch(
//             (error) => {
//                 reject(error);
//                 // res.status(400).json({
//                 //      error: error
//                 // });
//             }
//         );
//     });
//
//     return promise;
// }
//
// function getVideosDetails(service, uploads)
// {
//     var videos = [];
//     const promise = new Promise((resolve, reject) => {
//         uploads.forEach((upload, i) => {
//             videos.push(upload.contentDetails.videoId);
//         });
//         service.videos.list({
//             auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
//             part: 'statistics',
//             id: videos
//         }).then(response => {
//             resolve(response.data.items);
//         }).catch(
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
//
//     return promise;
// }

function userVideos(service, youtubeVideos, res)
{
    // const config = [{
    //     auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
    //     forUsername: 'stayseemusic',
    //     part: 'snippet,contentDetails'
    // },
    // {
    //     auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
    //     playlistId: '',
    //     part: 'snippet,contentDetails',
    //     maxResults: 25
    // }
    // ];
    const config = [{
        auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
        forUsername: 'stayseemusic',
        part: 'snippet,contentDetails'
    },
    {
        auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
        playlistId: '',
        part: 'snippet,contentDetails',
        maxResults: 25
    }
    ];
    var isMine = false;

    getChannelInfos(service, 'stayseemusic', config[0]).then(
        channelInfos =>
        {
            handleChannelInfos(channelInfos, youtubeVideos);
            config[1].playlistId = isMine ? channelInfos.relatedPlaylists.likes : channelInfos.relatedPlaylists.uploads;
            getUploads(service, config[1]).then(
                uploads => {
                    getVideosDetails(service, uploads, 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q').then(
                            videosDetails => {
                                handleVideosInfos(uploads, videosDetails, youtubeVideos);
                                res.status(200).json(youtubeVideos);
                            }
                    ).catch(
                        (error) => {
                            res.status(400).json({
                                error: error
                            });
                        }
                    );
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getWidgets = (req, res, next) => {

    const service = google.youtube('v3');
    let youtubeVideos = {
        title: "",
        picture: "",
        videos: []
    };
    userVideos(service, youtubeVideos, res);

    // getChannelInfos(service, 'stayseemusic').then(
    //     channelInfos =>
    //     {
    //         handleChannelInfos(channelInfos, youtubeVideos);
    //         getUploads(service, channelInfos.relatedPlaylists.uploads).then(
    //             uploads => {
    //                 getVideosDetails(service, uploads).then(
    //                         videosDetails => {
    //                             handleVideosInfos(uploads, videosDetails, youtubeVideos);
    //                             res.status(200).json(youtubeVideos);
    //                         }
    //                 ).catch(
    //                     (error) => {
    //                         res.status(400).json({
    //                             error: error
    //                         });
    //                     }
    //                 );
    //             }
    //         ).catch(
    //             (error) => {
    //                 res.status(400).json({
    //                     error: error
    //                 });
    //             }
    //         );
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
    // Thing.find().then(
    //     (things) => {
    //         res.status(200).json(things);
    //     }
    // ).catch(
    //     (error) => {
    //         res.status(400).json({
    //             error: error
    //         });
    //     }
    // );
}
