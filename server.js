/*jslint node:true*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = app;

// Use body parser to parse JSON body
app.use(bodyParser.json());


var apis_patriot = require('./apis_patriot');
var apis_watson_explorer = require('./apis_watson_explorer');

      
app.get('/patriot/bi_messages', apis_patriot.bi_messages);
app.get('/patriot/dwh_status', apis_patriot.dwh_status);
app.get('/patriot/dual', apis_patriot.dual);

app.get('/watson_explorer/search/:sources/:query', apis_watson_explorer.search);
app.get('/watson_explorer/search_mmj/:query', apis_watson_explorer.search_mmj);
app.get('/watson_explorer/search_news/:query', apis_watson_explorer.search_news);
app.get('/watson_explorer/search_phonebook/:query', apis_watson_explorer.search_phonebook);
app.get('/watson_explorer/search_pnet/:query', apis_watson_explorer.search_pnet);
app.get('/watson_explorer/search_quicklink/:query', apis_watson_explorer.search_quicklink);

var server = app.listen(3000, function () {
    "use strict";

    var host = server.address().address,
        port = server.address().port;

    console.log(' Server is listening at http://%s:%s', host, port);
});

