import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
const numConsoleLogs = 500;
for await (const req of s) {
  for (let i = 0; i < numConsoleLogs; i++) {
    console.log(`Iteration ${i}`);
  }
  req.respond({ body: JSON.stringify({ numConsoleLogs }) });
}
