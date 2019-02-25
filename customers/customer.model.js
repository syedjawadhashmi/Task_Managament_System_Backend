const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    currency: { type: String },
    address: { type: String },
    city: { type: String },
    zipCode: { type: Number },
    country: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Customer', schema);