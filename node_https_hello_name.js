const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync(process.env.KEY_FILE, "utf8"),
  cert: fs.readFileSync(process.env.CERT_FILE, "utf8"),
};

var server = https.createServer(options, (request, response) => {
  let data = "";
  request.on("data", (chunk) => data += chunk);
  request.on("end", () => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ name: JSON.parse(data).name }));
  });
});

server.listen(process.env.PORT || 3000);
