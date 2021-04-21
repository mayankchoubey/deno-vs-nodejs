import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
for await (const req of s) {
    req.respond({   status: 200, 
                    headers: new Headers({'content-type': 'application/json'}), 
                    body: JSON.stringify({ body: "Hello world" })});
}