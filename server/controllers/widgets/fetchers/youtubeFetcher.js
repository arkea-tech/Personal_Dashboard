exports.getChannelInfos = (service, channelName) => {
    var channels = [];
    const promise = new Promise((resolve, reject) => {
        service.channels.list({
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            forUsername: channelName,
            part: 'snippet,contentDetails'
        }).then(response => {
            channels = response.data.items;
            resolve({
                relatedPlaylists: channels[0].contentDetails.relatedPlaylists,
                thumbnails: channels[0].snippet.thumbnails,
                title: channels[0].snippet.title
            });
        }).catch(
            (error) => {
                reject(error);
                // res.status(400).json({
                //      error: error
                // });
            }
        );
    });

    return promise;
};

exports.getUploads = (service, playlistId) => {
    const promise = new Promise((resolve, reject) => {
        service.playlistItems.list({
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            playlistId: playlistId,
            part: 'snippet,contentDetails',
            maxResults: 25
        }).then(response => {
            resolve(response.data.items);
        }).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};

exports.getMostPopularUploads = (service) => {
    let datas = {
        uploads: null
    };

    const promise = new Promise((resolve, reject) => {
        service.searchResult.list({
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            playlistId: 'UU5nc_ZtjKW1htCVZVRxlQAQ',
            part: 'snippet',
            maxResults: 25,
            channelId: 'UC5nc_ZtjKW1htCVZVRxlQAQ',
            order: 'viewCount',
            type: 'video'
        }).then(response => {
            datas = {
                uploads: response.data.items
            };
            resolve(datas);
        }).catch(
            (error) => {
                reject(error);
                // res.status(400).json({
                //      error: error
                // });
            }
        );
    });

    return promise;
};

exports.getVideosDetails = (service, uploads) => {
    var videos = [];
    const promise = new Promise((resolve, reject) => {
        uploads.forEach((upload, i) => {
            videos.push(upload.contentDetails.videoId);
        });
        service.videos.list({
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            part: 'statistics',
            id: videos
        }).then(response => {
            resolve(response.data.items);
        }).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};
