// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  var result = {
    "ipaddress":req.headers['x-forwarded-for'].split(",")[0],
    "language":req.headers["accept-language"].split(",")[0],
    "software":req.headers['user-agent'].split("(")[1].split(")")[0]
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
