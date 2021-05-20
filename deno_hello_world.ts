import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
for await (const req of s) {
    handleRequest(req);
}

function handleRequest(req: ServerRequest) {
    req.respond({   status: 200, 
                    headers: new Headers({'content-type': 'application/json'}), 
                    body: JSON.stringify({ body: "Hello world" })});
}