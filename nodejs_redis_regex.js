const express = require("express");
const app = express();
const port = 3000;
const redis = require("redis");
const client = redis.createClient();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { v4: uuidv4 } = require("uuid");

app.post("/", async (req, res) => {
  client.get(req.body.key, (err, data) => {
    const dataObj = JSON.parse(data);
    const retObj = { tid: uuidv4() }, regex = RegExp("a.*");
    for (const key in dataObj) {
      if (regex.test(key)) {
        retObj[key] = dataObj[key];
      }
    }
    res.json(retObj);
  });
});

app.listen(
  port,
  () => console.log(`Example app listening at http://localhost:${port}`),
);
