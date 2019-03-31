module.exports = async (req, res) =>{
    try {
        console.log('yes');
        const User = require('../models/User');
        const HttpStatus = require('http-status');
        const username = req.params.username;

        if(username === 'admin'){
            await User.findOne({username: username}).then(user=> {
                if(user){
                    res.status(HttpStatus.OK).json({success: true, message: user.feeds});
                } else {
                    if (!user) throw new Error('User not exist');
                }
            });
        } else {
            return res
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({success: false, message:'Name is incorect'});
        }
    } catch (e) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({success: false, message: e.message});
    }
};
