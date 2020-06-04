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
            if (option.first_step == 'My Liked') {
                youtubeVideos.title = 'My Liked';
            }
            youtube = new Youtube({
                title: youtubeVideos.title,
                picture: youtubeVideos.picture,
                videos: youtubeVideos.videos
            });
            youtube.save().then(
                () => {
                    res.status(201).json({
                        message: 'YouTube widget saved successfully !'
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
