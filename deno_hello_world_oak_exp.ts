import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use(ctx => {
    ctx.response.body = { body: "Hello World" };
});

await app.listen({port: 3000});
