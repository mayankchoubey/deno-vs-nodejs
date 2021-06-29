const http = require("http");

var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ body: "Hello world" }));
});

server.listen(process.env.PORT || 3000);
