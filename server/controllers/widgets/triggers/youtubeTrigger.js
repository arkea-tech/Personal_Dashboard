const { handleChannelInfos, handleVideosInfos, handleUploadsInfos } = require('../handlers/youtubeHandler');
const { getChannelInfos, getUploads, getMostPopularUploads, getVideosDetails } = require('../fetchers/youtubeFetcher');

function userRecentMyLiked(channelInfos, res, youtubeVideos, config, filter)
{
    config[1].playlistId = config[0].mine ? channelInfos.relatedPlaylists.likes : channelInfos.relatedPlaylists.uploads;
    getUploads(config[1]).then(
        uploads => {
            handleUploadsInfos(uploads, config[2]);
            getVideosDetails(config[2]).then(
                    videosDetails => {
                        handleVideosInfos(videosDetails, youtubeVideos, filter);
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

function userPopular(channelInfos, res, youtubeVideos, config)
{
    config[1].channelId = channelInfos.id;
    getMostPopularUploads(config[1]).then(
        popularUploads => {
            handleUploadsInfos(popularUploads, config[2], true);
            getVideosDetails(config[2]).then(
                    videosDetails => {
                        handleVideosInfos(videosDetails, youtubeVideos);
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

exports.userVideos = (youtubeVideos, res, config, filter) => {
    getChannelInfos(config[0]).then(
        channelInfos => {
            handleChannelInfos(channelInfos, youtubeVideos);
            if (filter == "Most Popular") {
                userPopular(channelInfos, res, youtubeVideos, config);
            } else
                userRecentMyLiked(channelInfos, res, youtubeVideos, config, filter);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.mostPopularVideos = (res, youtubeVideos, config) => {
    getVideosDetails(config).then(
            videosDetails => {
                handleVideosInfos(videosDetails, youtubeVideos);
                res.status(200).json(youtubeVideos);
            }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
