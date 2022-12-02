const mongoose = require('mongoose');

const weatherSchema = mongoose.Schema({
    unit: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: String, required: true },
    temperature: { type: Number, required: true },
    condition: { type: Object, required: true},
    wind: { type: Number, required: false },
    humidity: { type: Number, required: false },
    pressure: { type: Number, required: false },
    forecast: { type: Array, required: false }
});

module.exports = mongoose.model('Weather', weatherSchema);
