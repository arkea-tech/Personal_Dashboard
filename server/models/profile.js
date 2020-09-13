const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    birthdate: { type: String, required: false },
    jobTitle: { type: String, required: false },
    gender: { type: String, required: false },
    description: { type: String, required: false }
});

module.exports = mongoose.model('Profile', profileSchema);
