const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  server.send(msg, rinfo.port);
});

server.bind(process.env.PORT || 3000);
