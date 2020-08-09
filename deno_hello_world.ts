import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use((ctx) => {
    ctx.response.body = { body: "Hello World\n" };
});
await app.listen({ port: 8000 });

