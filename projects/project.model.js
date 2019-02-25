const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    category: { type: String },
    ticketSummary: { type: String },
    status: { type: Number },
    number: { type: String },
    lastUpdated: { type: Date, default: Date.now },
    assigned: { type: Schema.Types.ObjectId, ref: 'customers' },
    priority: { type: Number },
    Deadline: { type: Date, default: Date.now },
    customer: { type: Schema.Types.ObjectId, ref: 'customers' }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', schema);