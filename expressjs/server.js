var express = require('express');

// import glint adapter for express
var glintForExpress = require('glint').adapters.express;

// create express application
var app = express();
// set static file serving
app.use("/build", express.static(__dirname + '/clientlibs/output/build'));
// add glint to express application
app.use(glintForExpress('clientlibs/output/manifest.json'));

// register handler for '/' url
app.get('/', function (req, res) {
    // now you have assets variable in res.locals
    // you can access final packages via package_name.files_category
    var body = '<html><head>' + res.locals.assets.base.css + '</head><body>' + res.locals.assets.base.js + '</body></html>';
    res.end(body);
});

// run application
app.listen(3000);
console.log('Listening on port 3000');