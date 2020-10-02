const Profile = require('../models/profile.js');

exports.createProfile = (req, res, next) => {
    const profile = new Profile({
        birthdate: req.body.birthdate,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender,
        description: req.body.description
    });

    profile.save().then(
        () => {
            res.status(201).json({
                message: 'Profile saved successfully ! ',
                profileId: profile._id
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

exports.getProfile = (req, res, next) => {
    Profile.findOne({
        _id: req.params.id
    }).then(
        (profile) => {
            res.status(200).json(profile);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.modifyProfile = (req, res, next) => {
    const profile = new Profile({
        _id: req.params.id,
        birthdate: req.body.birthdate,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender,
        description: req.body.description
    });

    Profile.updateOne({ _id: req.params.id }, profile).then(
        () => {
            res.status(201).json({
                message: 'Profile updated successfully !'
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

exports.deleteProfile = (req, res, next) => {
    Profile.deleteOne({
        _id: req.params.id
    }).then(
        () => {
            res.status(200).json({ message: 'Profile deleted !'});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
