const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    rate: { type: Number },
    rateUnit: { type: String },                   // Month / day / hourly
    description: { type: String },
    currency: { type: String },
    status: { type: Number },
    startDate: { type: Date },
    estimatedEndDate: { type: Date },
    actualEndDate: { type: Date },
    code: { type: String },
    priority: { type: Number },
    assigned: { type: Schema.Types.ObjectId, ref: 'customers' },
    customer: { type: Schema.Types.ObjectId, ref: 'customers' },
    lastUpdated: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', schema);