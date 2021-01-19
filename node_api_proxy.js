const http = require('http');

const server = http.createServer((request, response) => {
    let data = '';
    request.on('data', chunk => data += chunk);
    request.on('end', () => {
        const body=JSON.parse(data);
        const outBody=JSON.stringify({hop: ++body.hop});
        const options = {
            hostname: 'localhost',
            port: 4000,
            path: '/',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': outBody.length
            }
        };
        const req = http.request(options, res => {
            res.on('data', d => {
                const resJson=JSON.parse(d);
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify({hop: ++resJson.hop}));
            });
        }).on('error', error => console.error(error));
        req.write(outBody);
        req.end();    
    });
});

server.listen(process.env.PORT||3000);

