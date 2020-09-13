const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var key  = fs.readFileSync('./certs/localhost.key', 'utf8');
var cert = fs.readFileSync('./certs/localhost.crt', 'utf8');
const credentials = {key, cert};

app.post('/', async (req, res) => {
    res.json({body: `Hello ${req.body.name}`});
});

const httpsServer = https.createServer(credentials, app);
console.log(`Example app listening at http://localhost:${port}`);
httpsServer.listen(port);
