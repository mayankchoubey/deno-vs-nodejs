import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
for await (const req of s) {
    //const body=JSON.parse(new TextDecoder().decode(await Deno.readAll(req.body)));
    //console.log(body.a, body.c);
    console.log(req.url);
    console.log(req.headers.get('content-type'));
    console.log(new TextDecoder().decode(await Deno.readAll(req.body)));
    //const params=new URLSearchParams(new TextDecoder().decode(await Deno.readAll(req.body)));
    //console.log(params.get('a'), params.get('b'));

    //const respData=new URLSearchParams({'a': 'b', 'c': 'd'});
    //respData.set('e', 'f');
    req.respond({status: 200, 
                 headers: new Headers({'content-type': 'application/json'}), 
                 body: JSON.stringify({a: 'b', c: 'd', e: 'f'})});
}
