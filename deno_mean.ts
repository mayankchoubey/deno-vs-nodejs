import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
const decoder = new TextDecoder();

for await (const req of s) {
    const body=JSON.parse(decoder.decode(await Deno.readAll(req.body)));
    req.respond(JSON.stringify({mean: body.reduce( ( p, c ) => p + c, 0 ) / body.length}));
}
