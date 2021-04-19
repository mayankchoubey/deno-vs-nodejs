import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Response, ServerRequest, serve } from "https://deno.land/std/http/server.ts";

/*
const res: Response = {};
setCookie(res, {name: "Name1", 
                value: "Val1" }); 
console.log(res);

deleteCookie(res, "Name1");
console.log(res);
*/

const s = serve({ port: 3000 });
for await (const req of s) {
    console.log(getCookies(req));
}
