const User = require('../models/User');
const HttpStatus = require('http-status');

module.exports = async (req, res) => {
    try {
        if (!req.body.username || !req.body.title || !req.body.link) throw new Error('Some body fields are empty');
      await User.updateOne({
            username: req.body.username,
        }, {
            $push: {
                feeds: {
                    title: req.body.title,
                    link: req.body.link
                }
            }
        });
        const user = await User.findOne({username: req.body.username});
        res
            .status(HttpStatus.OK)
            .json({success: true, message: user.feeds});

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
