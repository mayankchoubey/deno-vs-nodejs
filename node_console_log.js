const http = require("http");

const numConsoleLogs = 100;
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  for (let i = 0; i < numConsoleLogs; i++) {
    console.log(`Iteration ${i}`);
  }
  response.end(JSON.stringify({ numConsoleLogs }));
});

server.listen(3000);
