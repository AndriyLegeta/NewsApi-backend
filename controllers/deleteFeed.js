const User = require('../models/User');
const HttpStatus = require('http-status');

module.exports = async (req, res) => {
    try {
        const username = req.get('Authorization');
        await User.updateOne({
            username: username
        }, {
            $pull: {
                feeds: {
                    title: req.params.title
                }
            }
        });
        res.status(HttpStatus.OK).json({success: true, message: 'user deleted'});
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
