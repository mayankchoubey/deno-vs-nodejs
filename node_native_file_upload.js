const http = require("http");

const server = http.createServer((request, response) => {
    let data = "";
    request.on("data", (chunk) => data += chunk);
    request.on("end", () => {
        if(data) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ uploadedLen: data.length }));
        } else {
            response.writeHead(400);
            response.end();
        } 
    });
});
  
server.listen(process.env.PORT || 3000);
  