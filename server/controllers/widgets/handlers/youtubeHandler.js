const Video = require('../../../interfaces/video').Video;

exports.handleChannelInfos = (channelInfos, youtubeVideos) => {
    youtubeVideos.title = channelInfos.title;
    youtubeVideos.picture = channelInfos.thumbnails;
};

exports.handleUploadsInfos = (uploads, videosConfig) => {
    uploads.forEach((upload, i) => {
        videosConfig.id.push(upload.contentDetails.videoId);
    });
};

exports.handleVideosInfos = (uploads, videosDetails, youtubeVideos) => {
    var date;

    uploads.forEach((upload, i) => {
        date = new Date(upload.contentDetails.videoPublishedAt);
        youtubeVideos.videos.push(new Video(
            upload.snippet.title,
            upload.snippet.thumbnails,
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            videosDetails[i].statistics.viewCount)
        );
    });
};
