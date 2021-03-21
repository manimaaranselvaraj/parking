/************* Start NodeJS Server **************/
const express = require('express');
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {

    var allowedOrigins = ['http://localhost:4200', 'http://localhost:4002', 'http://localhost:4300'];

    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', "*");
    }
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

require('./Router/userRouter')(app);
app.listen(process.env.PORT || 8080, console.log('app started'));

module.export = {
    app: app
};
/************* End NodeJS Server **************/
