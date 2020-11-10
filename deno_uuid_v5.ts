import { serve } from "https://deno.land/std/http/server.ts";
import { v5 } from "https://deno.land/std/uuid/mod.ts";

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const value='Hello World!';
const decoder = new TextDecoder();

const s = serve({ port: 3000 });
for await (const req of s) {
    const body=JSON.parse(decoder.decode(await Deno.readAll(req.body)));
    const uuids=[];
    for(let i=0; i<body.requiredUuids; i++)
        uuids.push(v5.generate({value, namespace: MY_NAMESPACE}));
    req.respond({ body: JSON.stringify(uuids)});
}
