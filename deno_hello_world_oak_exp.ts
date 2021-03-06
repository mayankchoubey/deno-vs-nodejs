import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const get1 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/getData.json"));
const get2 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/getData2.json"));
const post1 = JSON.parse(await Deno.readTextFile("/Users/mayankc/Work/source/deno-vs-nodejs/postData.json"));

const router = new Router();
router
    .get('/', ctx => {
        ctx.response.body=get1;
    })
    .get('/another', ctx => {
        ctx.response.body=get2;
    })
    .post('/', ctx => {
        ctx.response.body=post1;
    });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
