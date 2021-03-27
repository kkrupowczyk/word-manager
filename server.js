let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/words-route');
routes(app);

app.listen(port);

console.log("Running app on http://localhost:" + port);