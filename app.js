const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/dataBaseUrl');
const feedsRouter = require('./routes/feedsRouter');
const authRouter = require('./routes/authRouter');
const newsRouter = require('./routes/newsRouter');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(database.url, {useNewUrlParser: true});

app.use('/feeds', feedsRouter);
app.use('/auth', authRouter);
app.use('/news', newsRouter);

app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('Listening 3000');
});
