/*jslint node:true*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = app;

// Use body parser to parse JSON body
app.use(bodyParser.json());


var apis_patriot = require('./apis_patriot');

app.get('/patriot/bi_messages', apis_patriot.bi_messages);
app.get('/patriot/dwh_status', apis_patriot.dwh_status);
app.get('/patriot/dual', apis_patriot.dual);

var server = app.listen(3000, function () {
    "use strict";

    var host = server.address().address,
        port = server.address().port;

    console.log(' Server is listening at http://%s:%s', host, port);
});

