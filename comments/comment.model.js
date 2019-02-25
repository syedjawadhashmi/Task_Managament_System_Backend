const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    text: { type: String, require: true },
    author: { type: Schema.Types.ObjectId, ref: 'customers' },    
    lastUpdated: { type: Date, default: Date.now },
    postedAt: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Comment', schema);