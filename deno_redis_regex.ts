import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const redis = await connect({
    hostname: "127.0.0.1",
    port: 6379
});

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
    const buf: Uint8Array = await Deno.readAll(req.body);
    const decoder = new TextDecoder();
    const bodyText = decoder.decode(buf);
    const bodyObj: any=JSON.parse(bodyText);
    const redisData: any = await redis.get(bodyObj.key);
    const redisObj: any=JSON.parse(redisData!);
    const retObj: any={tid: v4.generate()}, regex = RegExp('a.*');
    for(const key in redisObj) {
        if(regex.test(key))
            retObj[key]=redisObj[key];
    }
    req.respond({ body: JSON.stringify(retObj) });
}

