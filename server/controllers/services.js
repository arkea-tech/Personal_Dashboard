const Service = require('../models/service');
const Widget = require('../interfaces/widget').Widget;

exports.createService = (req, res, next) => {
    let widgets = [];
    let service = {};

    for (const widget of req.body.widgets) {
        widgets.push(new Widget(widget.name, widget.description, widget.params));
    }
    service = new Service({
        name: req.body.name,
        widgets: widgets,
    });
    service.save().then(
        () => {
            res.status(201).json({
                message: 'Service Saved Successfully !'
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

exports.deleteService = (req, res, next) => {
    Service.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({ message: 'Service Deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
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

exports.getServices = (req, res, next) => {
    Service.find().then(
        (services) => {
            res.status(200).json(services);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
