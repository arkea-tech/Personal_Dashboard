const { generateOAuth2Client } = require('../../oauth2');

function filterPopularChannelUploads(channelName)
{
    const config = [
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            forUsername: channelName,
            part: 'snippet,contentDetails'
        },
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            part: 'snippet',
            maxResults: 25,
            channelId: '',
            order: 'viewCount',
            type: 'video'
        },
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            part: 'statistics,snippet',
            id: []
        }
    ];

    return config;
}

function channelUploads(channelName, filter)
{
    let config = [
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            forUsername: channelName,
            part: 'snippet,contentDetails'
        },
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            playlistId: '',
            part: 'snippet,contentDetails',
            maxResults: 25
        },
        {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            part: 'statistics,snippet',
            id: []
        }
    ];

    config = filter == "Most Popular" ? filterPopularChannelUploads(channelName) : config;
    return config;
}

function myLiked(token)
{
    const oauth2Client = generateOAuth2Client(token);
    const config = [
        {
            auth: oauth2Client,
            mine: true,
            part: 'snippet,contentDetails'
        },
        {
            auth: oauth2Client,
            playlistId: '',
            part: 'snippet,contentDetails',
            maxResults: 25
        },
        {
            auth: oauth2Client,
            part: 'statistics,snippet',
            id: []
        }
    ];

    return config;
}

function mostPopular()
{
    const config = {
            auth: 'AIzaSyBmQsTIX2RCJQIkkBLA95UNfqlaS4Jbs9Q',
            part: 'snippet,statistics',
            chart: 'mostPopular',
            regionCode: 'US',
            maxResults: 25
    };

    return config;
}

exports.generateConfig = (option, token) => {
    if (option.first_step == "Channel Uploads") {
        return channelUploads(option.second_step.channel_name, option.second_step.filter);
    } else if (option.first_step == "My Liked") {
        return myLiked(token);
    } else if (option.first_step == "Most Popular") {
        return mostPopular();
    }
};
