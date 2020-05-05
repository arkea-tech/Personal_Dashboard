const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
    view: { type: String, required: true },
    events: { type: Array, required: false }
});

module.exports = mongoose.model('Calendar', calendarSchema);
