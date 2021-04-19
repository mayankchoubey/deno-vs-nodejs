import { MultipartWriter } from "https://deno.land/std/mime/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
for await (const req of s) {
    const buf=new Deno.Buffer();
    const mw=new MultipartWriter(buf);

    await mw.writeField("f1", "v1");
    await mw.writeField("f2", "v2");

    const buf2=new Deno.Buffer();
    const encoder=new TextEncoder();
    for(let i=0; i<100; i++)
        await buf2.write(encoder.encode(i.toString()));
    await mw.writeFile("readings", "readings.txt", buf2);
    
    mw.close();
    
    const headers=new Headers();
    headers.set('content-type', mw.formDataContentType());
    headers.set('content-length', buf.length.toString());
    req.respond({status: 200, headers, body: buf});
}