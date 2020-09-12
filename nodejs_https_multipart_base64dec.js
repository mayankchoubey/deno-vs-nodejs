const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { v4: uuidv4 } = require('uuid');

var key  = fs.readFileSync('./certs/localhost.key', 'utf8');
var cert = fs.readFileSync('./certs/localhost.crt', 'utf8');
const credentials = {key, cert};

app.post('/', upload.none(), async (req, res) => {
    const tid=uuidv4();
    const buff = new Buffer(req.body.base64, 'base64');
    const decoded=buff.toString('ascii');
    res.json({tid, len: decoded.length});
});

const httpsServer = https.createServer(credentials, app);
console.log(`Example app listening at http://localhost:${port}`);
httpsServer.listen(port);
