const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String},
    feeds: [{
        title: {type: String},
        link: {type: String}
    }]
});

module.exports = mongoose.model('User', UserSchema);
