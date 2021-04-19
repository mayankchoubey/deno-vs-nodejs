import { MultipartWriter } from "https://deno.land/std/mime/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
for await (const req of s) {
    const buf=new Deno.Buffer();
    const mw=new MultipartWriter(buf);
    await mw.writeField("name", "Mayank");
    mw.close();
    
    const headers=new Headers();
    headers.set('content-type', mw.formDataContentType());
    headers.set('content-length', buf.length.toString());
    req.respond({status: 200, headers, body: buf});
}

