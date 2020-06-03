const google = require('googleapis').google;

exports.getChannelInfos = (channelConfig) => {
    const service = google.youtube('v3');
    var channels = [];
    const promise = new Promise((resolve, reject) => {
        service.channels.list(channelConfig).then(response => {
            channels = response.data.items;
            resolve({
                relatedPlaylists: channels[0].contentDetails.relatedPlaylists,
                thumbnails: channels[0].snippet.thumbnails,
                title: channels[0].snippet.title,
                id: channels[0].id
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

exports.getUploads = (uploadsConfig) => {
    const service = google.youtube('v3');
    const promise = new Promise((resolve, reject) => {
        service.playlistItems.list(uploadsConfig).then(response => {
            resolve(response.data.items);
        }).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};

exports.getMostPopularUploads = (popularUploadsConfig) => {
    const service = google.youtube('v3');
    const promise = new Promise((resolve, reject) => {
        service.search.list(popularUploadsConfig).then(response => {
            resolve(response.data.items);
        }).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};

exports.getVideosDetails = (videosConfig) => {
    const service = google.youtube('v3');
    const promise = new Promise((resolve, reject) => {
        service.videos.list(videosConfig).then(response => {
            resolve(response.data.items);
        }).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};
