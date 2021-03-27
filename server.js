let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/words-route');
routes(app);

module.exports = app.listen(port, () => console.log(`Running on port ${port}...`));