const http = require("http");

var server = http.createServer(function (request, response) {
  let data = "";
  request.on("data", (chunk) => data += chunk);
  request.on("end", () => {
    const body = JSON.parse(data);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({ mean: body.reduce((p, c) => p + c, 0) / body.length }),
    );
  });
});

server.listen(process.env.PORT || 3000);
