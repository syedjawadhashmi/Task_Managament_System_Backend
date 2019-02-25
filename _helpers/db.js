const config = require('config.json');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ds149875.mlab.com:49875/taskmanagement` || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.connection.on('error', (error) => { console.error('Error in MongoDb connection: ' + error); });
mongoose.connection.on('connected', (res) => { console.log('MongoDB is connected!'); });
mongoose.connection.on('reconnected', (res) => { console.log('MongoDB is reconnected!'); });
mongoose.connection.on('disconnected', (res) => { console.log('MongoDB is disconnected!'); });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Customer: require('../customers/customer.model'),
    Project: require('../projects/project.model')
};