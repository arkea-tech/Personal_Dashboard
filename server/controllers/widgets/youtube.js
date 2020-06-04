const Youtube = require('../../models/widgets/youtube');
// const google = require('googleapis').google;
const { userVideos, mostPopularVideos } = require('./triggers/youtubeTrigger');
const { generateConfig } = require('./config/youtubeConfig');
// const OAuth2 = google.auth.OAuth2;
// const CONFIG = require('../../config/config.js');
// const jwt = require('jsonwebtoken');


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

exports.getWidgets = (req, res, next) => {

    let youtubeVideos = {
        title: "",
        picture: "",
        videos: []
    };
    const option = {
        first_step: "My Liked",
        second_step: {
            channel_name: "stayseemusic",
            filter: "Recent"
        }
    }
    const config = generateConfig(option, req.query.token);

    if (option.first_step == "Most Popular") {
        mostPopularVideos(res, youtubeVideos, config);
    } else
        userVideos(youtubeVideos, res, config, option.second_step.filter);
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
