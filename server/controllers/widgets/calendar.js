const Calendar = require('../../models/widgets/calendar');
const Event = require('../../interfaces/event').Event;
const google = require('googleapis').google;
const { generateOAuth2Client } = require('../oauth2');

function myEvents(token)
{
    let events = [];
    const service = google.calendar('v3');
    const oauth2Client = generateOAuth2Client(token);
    const promise = new Promise((resolve, reject) => {
        service.events.list({
            auth: oauth2Client,
            calendarId: 'primary',
            timeMin: '2018-01-01T00:00:00-04:00'
        }).then(datas => {
            datas.data.items.forEach((item, i) => {
                events.push(new Event(item.summary, item.colorId, item.start.dateTime, item.end.dateTime));
            });
            resolve(events);
        }).catch(
            (error) => {
                resolve(error);
            }
        );
    });

    return promise;
}

exports.createWidget = (req, res, next) => {
    let calendar;
    let promise;

    if (req.body.events) {
        promise = myEvents(req.query.token).then(events => {
            calendar = new Calendar({
                view: req.body.view,
                events: events
            });
        }).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    } else {
        calendar = new Calendar({
            view: req.body.view,
            events: null
        });
        promise = new Promise((resolve, reject) => {
            resolve();
        });
    }
    promise.then(
        () => {
            calendar.save().then(
                () => {
                    res.status(201).json({
                        message: 'Calendar Widget Saved Successfully !'
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
    );
}

exports.deleteWidget = (req, res, next) => {
    Calendar.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Calendar Widget Deleted !'});
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
    let calendar;
    let promise;

    Calendar.findOne({
        _id: req.params.id
    }).then(
        (calendarWidget) => {
            if (req.body.view != calendarWidget.view && req.body.events && calendarWidget.events) {
                //update only view
                calendar = new Calendar({
                    _id: req.params.id,
                    view: req.body.view,
                    events: calendarWidget.events
                });
                promise = new Promise((resolve, reject) => {
                    resolve();
                });
            } else if (!req.body.events && calendarWidget.events) {
                //disable the events
                calendar = new Calendar({
                    _id: req.params.id,
                    view: req.body.view,
                    events: null
                });
                promise = new Promise((resolve, reject) => {
                    resolve();
                });
            } else if (req.body.events && !calendarWidget.events) {
                //upadte all
                promise = myEvents(req.query.token).then(events => {
                    calendar = new Calendar({
                        _id: req.params.id,
                        view: req.body.view,
                        events: events
                    });
                }).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
            } else {
                res.status(400).json({
                    error: 'Same Inputs'
                });
                return;
            }
            promise.then(
                () => {
                    Calendar.updateOne({_id: req.params.id}, calendar).then(
                        () => {
                            res.status(201).json({
                                message: 'Calendar Widget Updated Successfully !'
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
            );
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
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
    Calendar.find().then(
        (events) => {
            res.status(200).json(events);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
