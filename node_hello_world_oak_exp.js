const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({body: 'Hello World'}));
app.listen(3000);
