const mongoose = require('mongoose');

const youtubeSchema = mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: Object, required: true},
    videos: { type: Array, required: true }
});

module.exports = mongoose.model('Youtube', youtubeSchema);
