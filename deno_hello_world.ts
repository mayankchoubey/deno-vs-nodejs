import { serve } from "https://deno.land/std/http/server.ts";

const text = await Deno.readTextFile("/var/tmp/sample.json");
const json = JSON.parse(text);

const s = serve({ port: 3000 });
for await (const req of s) {
  req.respond({ status: 200,
                body: JSON.stringify(json) });
}
