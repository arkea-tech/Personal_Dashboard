const Video = require('../../../interfaces/video').Video;

exports.handleChannelInfos = (channelInfos, youtubeVideos) => {
    youtubeVideos.title = channelInfos.title;
    youtubeVideos.picture = channelInfos.thumbnails;
};

exports.handleUploadsInfos = (uploads, videosConfig, isPopular = false) => {
    let videoId;

    uploads.forEach((upload, i) => {
        videoId = isPopular ? upload.id.videoId : upload.contentDetails.videoId;
        videosConfig.id.push(videoId);
    });
};

exports.handleVideosInfos = (videosDetails, youtubeVideos, filter) => {
    var date;

    videosDetails.forEach((videoDetail, i) => {
        date = new Date(videoDetail.snippet.publishedAt);
        youtubeVideos.videos.push(new Video(
            videoDetail.snippet.title,
            videoDetail.snippet.thumbnails,
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            videoDetail.statistics.viewCount)
        );
    });
    if (filter == "Old")
        youtubeVideos.videos.reverse();
};
