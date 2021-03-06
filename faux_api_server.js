const http = require("http");

//create a server object:
http.createServer((req, res) => {
  let data = "";
  req.on("data", (chunk) => data += chunk);
  req.on("end", () => {
    const body = JSON.parse(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ hop: ++body.hop }));
    res.end();
  });
}).listen(4000);
