import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 3000 });
const decoder = new TextDecoder();
const numHexChars = 16;

for await (const req of s) {
  const body = JSON.parse(decoder.decode(await Deno.readAll(req.body)));
  const randomNumbers = [];
  for (let i = 0; i < body.requiredNumbers; i++) {
    randomNumbers.push(
      [...Array(numHexChars)].map(() =>
        Math.floor(Math.random() * 16).toString(16)
      ).join(""),
    );
  }
  req.respond({ body: JSON.stringify(randomNumbers) });
}
