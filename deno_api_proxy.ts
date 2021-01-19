import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
const decoder = new TextDecoder();

for await (const req of s) {
    const body=JSON.parse(decoder.decode(await Deno.readAll(req.body)));
    const fetchParams: RequestInit={
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({hop: ++body.hop})
    };
    const responseData=await fetch('http://localhost:4000', fetchParams);
    const json=await responseData.json();
    req.respond({ body: JSON.stringify({hop: ++json.hop })});
}
