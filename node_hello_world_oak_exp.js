const express = require("express");
const fs = require("fs");
const app = express();

const get1 = JSON.parse(fs.readFileSync("/Users/mayankc/Work/source/deno-vs-nodejs/getData.json"));
const get2 = JSON.parse(fs.readFileSync("/Users/mayankc/Work/source/deno-vs-nodejs/getData2.json"));
const post1 = JSON.parse(fs.readFileSync("/Users/mayankc/Work/source/deno-vs-nodejs/postData.json"));

app.get("/", (req, res) => res.json(get1));
app.get("/another", (req, res) => res.json(get2));
app.post("/", (req, res) => res.json(post1));
app.listen(3000);
