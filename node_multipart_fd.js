const http = require('http');
const formidable = require('formidable');

const server = http.createServer(function(request, response) {
    const form = formidable({ multiples: true });
    form.parse(request, (err, fields, files) => {
        const retBody={ name: fields.name, age: fields.age};
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify({body: retBody}));
    });
});

server.listen(3000);

