const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    widgets: { type: Array, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
