const { handleChannelInfos, handleVideosInfos, handleUploadsInfos } = require('../handlers/youtubeHandler');
const { getChannelInfos, getUploads, getMostPopularUploads, getVideosDetails } = require('../fetchers/youtubeFetcher');

function userRecentMyLiked(channelInfos, youtubeVideos, config, filter)
{
    const promise = new Promise((resolve, reject) => {
        config[1].playlistId = config[0].mine ? channelInfos.relatedPlaylists.likes : channelInfos.relatedPlaylists.uploads;
        getUploads(config[1]).then(
            uploads => {
                handleUploadsInfos(uploads, config[2]);
                getVideosDetails(config[2]).then(
                        videosDetails => {
                            handleVideosInfos(videosDetails, youtubeVideos, filter);
                            resolve();
                        }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        ).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
}

function userPopular(channelInfos, youtubeVideos, config)
{
    const promise = new Promise((resolve, reject) => {
        config[1].channelId = channelInfos.id;
        getMostPopularUploads(config[1]).then(
            popularUploads => {
                handleUploadsInfos(popularUploads, config[2], true);
                getVideosDetails(config[2]).then(
                        videosDetails => {
                            handleVideosInfos(videosDetails, youtubeVideos);
                            resolve();
                        }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        ).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise
}

exports.userVideos = (config, filter) => {
    let youtubeVideos = {
        title: "",
        picture: "",
        videos: []
    };
    const promise = new Promise((resolve, reject) => {
        getChannelInfos(config[0]).then(
            channelInfos => {
                handleChannelInfos(channelInfos, youtubeVideos);
                if (filter == "Most Popular") {
                    userPopular(channelInfos, youtubeVideos, config).then(() => {
                        resolve(youtubeVideos);
                    }).catch(
                        (error) => {
                            reject(error);
                        }
                    );
                } else {
                    userRecentMyLiked(channelInfos, youtubeVideos, config, filter).then(() => resolve(youtubeVideos)).catch(
                        (error) => {
                            reject(error);
                        }
                    );
                }
            }
        ).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};

exports.mostPopularVideos = (config) => {
    let youtubeVideos = {
        title: "Most Popular",
        picture: {},
        videos: []
    };
    const promise = new Promise((resolve, reject) => {
        getVideosDetails(config).then(
                videosDetails => {
                    handleVideosInfos(videosDetails, youtubeVideos);
                    resolve(youtubeVideos);
                }
        ).catch(
            (error) => {
                reject(error);
            }
        );
    });

    return promise;
};
