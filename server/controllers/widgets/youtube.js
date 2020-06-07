const Youtube = require('../../models/widgets/youtube');
// const google = require('googleapis').google;
const { userVideos, mostPopularVideos } = require('./triggers/youtubeTrigger');
const { generateConfig } = require('./config/youtubeConfig');
// const OAuth2 = google.auth.OAuth2;
// const CONFIG = require('../../config/config.js');
// const jwt = require('jsonwebtoken');


exports.createWidget = (req, res, next) => {
    const option = {
        first_step: req.body.first_step,
        second_step: {
            channel_name: req.body.second_step.channel_name,
            filter: req.body.second_step.filter,
        }
    }
    const config = generateConfig(option, req.query.token);
    let promise;
    let youtube;

    if (option.first_step == "Most Popular") {
        promise = mostPopularVideos(config);
    } else {
        promise = userVideos(config, option.second_step.filter);
    }
    promise.then(
        youtubeVideos => {
            // if (option.first_step == 'My Liked') {
            //     youtubeVideos.title = 'My Liked';
            // }
            youtube = new Youtube({
                title: option.first_step == 'My Liked' ? 'My Liked' : youtubeVideos.title,
                picture: youtubeVideos.picture,
                videos: youtubeVideos.videos,
                filter: option.second_step.filter,
                inputTitle: option.first_step == 'Channel Uploads' ? option.second_step.channel_name : null
            });
            youtube.save().then(
                () => {
                    res.status(201).json({
                        message: 'YouTube Widget Saved Successfully !'
                    });
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

exports.deleteWidget = (req, res, next) => {
    Youtube.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'YouTube Widget Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
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
    const option = {
        first_step: req.body.first_step,
        second_step: {
            channel_name: req.body.second_step.channel_name,
            filter: req.body.second_step.filter,
        }
    }
    const config = generateConfig(option, req.query.token);
    let promise;
    let youtube;

    Youtube.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            if ((option.first_step != "Channel Uploads" && option.first_step != thing.title) || (option.first_step == "Channel Uploads" && (option.second_step.channel_name != thing.inputTitle || option.second_step.filter != thing.filter))) {
                if (option.first_step == "Most Popular") {
                    promise = mostPopularVideos(config);
                } else {
                    promise = userVideos(config, option.second_step.filter);
                }
                promise.then(
                    youtubeVideos => {
                        // if (option.first_step == 'My Liked') {
                        //     youtubeVideos.title = 'My Liked';
                        // }
                        youtube = new Youtube({
                            _id: req.params.id,
                            title: option.first_step == 'My Liked' ? 'My Liked' : youtubeVideos.title,
                            picture: youtubeVideos.picture,
                            videos: youtubeVideos.videos,
                            filter: option.second_step.filter,
                            inputTitle: option.first_step == 'Channel Uploads' ? option.second_step.channel_name : null
                        });
                        Youtube.updateOne({_id: req.params.id}, youtube).then(
                            () => {
                                res.status(201).json({
                                    message: 'YouTube Widget Updated Successfully !'
                                });
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
            } else {
                res.status(400).json({
                    error: 'Same inputs'
                });
            }
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.getWidgets = (req, res, next) => {
    Youtube.find().then(
        (youtubeWidgets) => {
            res.status(200).json(youtubeWidgets);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
