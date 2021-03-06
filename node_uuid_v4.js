const http = require("http");
const { v4: uuidv4 } = require("uuid");

var server = http.createServer(function (request, response) {
  let data = "";
  request.on("data", (chunk) => data += chunk);
  request.on("end", () => {
    const body = JSON.parse(data);
    const uuids = [];
    for (let i = 0; i < body.requiredUuids; i++) {
      uuids.push(uuidv4());
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(uuids));
  });
});

server.listen(process.env.PORT || 3000);
