const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    name: { type: String, required: true },
    widgets: { type: Array, required: true }
});

module.exports = mongoose.model('Services', servicesSchema);
