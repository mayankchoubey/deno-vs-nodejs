import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 3000 });
const decoder = new TextDecoder();

for await (const req of s) {
  const body = JSON.parse(decoder.decode(await Deno.readAll(req.body)));
  const nums = [];
  for (let i = 0; i < body.length; i++) {
    nums.push(body[i]);
  }
  req.respond({ body: JSON.stringify(nums) });
}
