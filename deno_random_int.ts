import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
const decoder = new TextDecoder();
const upperBound=10000;

for await (const req of s) {
    const body=JSON.parse(decoder.decode(await Deno.readAll(req.body)));
    const randomNumbers=[];
    for(let i=0; i<body.requiredNumbers; i++)
        randomNumbers.push(Math.ceil(Math.random()*upperBound));
    req.respond({ body: JSON.stringify(randomNumbers)});
}
