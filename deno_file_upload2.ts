import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
for await (const req of s) {
    const ct = req.headers.get("content-type");
    const cl = req.contentLength;
    req.respond({ body: JSON.stringify({uploadedLength: cl}) });
}
