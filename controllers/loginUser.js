const User = require('../models/User');
const HttpStatus = require('http-status');

module.exports = async (req, res) => {
    try {
        if(!req.body.username || !req.body.password){
            return res
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({success: false, message:'No empty fields allowed'});
        }
        const user = await User.findOne({username: req.body.username});
        if(!user){ await User.create({
            username: req.body.username,
            feeds:[{
                title: 'Reddit',
                link: 'https://www.reddit.com/.rss'
            },{
                title: 'Nasa',
                link: 'https://www.nasa.gov/rss/dyn/breaking_news.rss'
            },{
                title: 'BBC',
                link: 'http://feeds.bbci.co.uk/news/rss.xml?edition=uk'
            }]
        });
        }
        return res
            .status(HttpStatus.OK)
            .json({success: true, message: user.username});
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
