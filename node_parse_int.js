const http = require('http');

var server = http.createServer(function(request, response) {
    let data = '';
    request.on('data', chunk => data += chunk);
    request.on('end', () => {
        const body=JSON.parse(data);
        const nums=[];
        for(let i=0; i<body.length; i++)
            nums.push(parseInt(body[i]));    
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(nums));
    });
});

server.listen(process.env.PORT||3000);

