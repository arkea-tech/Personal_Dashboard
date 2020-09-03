const mongoose = require('mongoose');

const youtubeSchema = mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: Object, required: true },
    videos: { type: Array, required: true },
    filter: { type: String, required: false },
    inputTitle: { type: String, required: false }
});

module.exports = mongoose.model('Youtube', youtubeSchema);
