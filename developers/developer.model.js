const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    status: { type: Number, default: 1 },
    rate: { type: Number },
    rateUnit: { type: String },                               // Mon / Day / Hourly
    currency: { type: String },
    lastUpdated: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Developer', schema);