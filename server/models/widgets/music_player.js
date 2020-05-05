const mongoose = require('mongoose');

const musicPlayerSchema = mongoose.Schema({
    track: { type: String, required: true }
});

module.exports = mongoose.model('MusicPlayer', musicPlayerSchema);
