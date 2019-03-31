const User = require('../models/User');
const HttpStatus = require('http-status');
let Parser = require('rss-parser');
let parser = new Parser();

module.exports = async (req, res) =>{
    try {
        const feedUlr = req.body.feedUrl;
        console.log(feedUlr._value);
        let feed = await parser.parseURL(feedUlr._value);
        if(feed){
            res.status(HttpStatus.OK).json({success: true, message: feed.items});
        }
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
