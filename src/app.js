//  This use strict statement causes the JavaScript interpreter to run in a strict variant.
'use strict';

debugger;
// this requires express fo our app
var express = require('express');
var parser = require('body-parser');
// API module
var router = require('./api');

// setting up an instance to allow middlewear to be used
var app = express();

require('./database');
require('./seed');

// This allows express to use static middlewear
app.use("/", express.static('public'));
app.use(parser.json());

app.use('/api', router);

// setting up so that the server will listen on port 3000
app.listen(3000, function() {
	console.log("The server is running on port 3000!");
});