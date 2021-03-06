import { serve } from "https://deno.land/std/http/server.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const s = serve({ port: 3000 });
const decoder = new TextDecoder();

for await (const req of s) {
  const body = JSON.parse(decoder.decode(await Deno.readAll(req.body)));
  const uuids = [];
  for (let i = 0; i < body.requiredUuids; i++) {
    uuids.push(v4.generate());
  }
  req.respond({ body: JSON.stringify(uuids) });
}
