import { Application } from "https://deno.land/x/oak/mod.ts";

const text = await Deno.readTextFile("/var/tmp/sample.json");
const json = JSON.parse(text);

const app = new Application();
app.use((ctx) => {
  ctx.response.body = json;
});

await app.listen({ port: 3000 });
