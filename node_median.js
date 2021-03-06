const http = require("http");

var server = http.createServer(function (request, response) {
  let data = "";
  request.on("data", (chunk) => data += chunk);
  request.on("end", () => {
    const body = JSON.parse(data);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        median: body.slice().sort((a, b) => a - b)[Math.floor(body.length / 2)],
      }),
    );
  });
});

server.listen(process.env.PORT || 3000);
