var express = require('express');

// import glint adapter for express
var glintForExpress = require('glint').adapters.express;

// create express application
var app = express();
// set view engine to jade
app.set('view engine', 'jade');
// set static file serving
app.use("/build", express.static(__dirname + '/clientlibs/output/build'));

// add glint to express application
app.use(glintForExpress('clientlibs/output/manifest.json'));

// register handler for '/' url
app.get('/', function (req, res) {
    return res.render(__dirname + '/home');
});

// run application
app.listen(3000);
console.log('Listening on port 3000');