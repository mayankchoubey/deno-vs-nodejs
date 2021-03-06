import { serve } from "https://deno.land/std/http/server.ts";

const get1 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/getData.json"));
const get2 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/getData2.json"));
const post1 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/postData.json"));

const s = serve({ port: 3000 });
for await (const req of s) {
    console.log(req.url);
    switch(req.method) {
        case 'GET': {
            switch(req.url) {
                case '/': {
                    req.respond({   status: 200,
                                    body: JSON.stringify(get1) });
                    break;
                }

                case '/another': {
                    req.respond({   status: 200,
                                    body: JSON.stringify(get2) });
                    break;
                }
            }

            break;
        }

        case 'POST': {
            switch(req.url) {
                case '/': {
                    req.respond({   status: 200,
                                    body: JSON.stringify(post1) });
                    break;
                }
            }
        }
    }

}
