const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    category: { type: String },
    ticketSummary: { type: String },
    status: { type: Number },
    number: { type: String },
    assigned: { type: Schema.Types.ObjectId, ref: 'customers' },
    priority: { type: Number },
    deadline: { type: Date, default: Date.now },
    customer: { type: Schema.Types.ObjectId, ref: 'customers' },
    lastUpdated: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', schema);