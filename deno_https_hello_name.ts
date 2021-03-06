import { serveTLS } from "https://deno.land/std/http/server.ts";

const certFile: string = Deno.env.toObject()["CERT_FILE"];
const keyFile: string = Deno.env.toObject()["KEY_FILE"];
const options = {
  hostname: "localhost",
  port: 3000,
  certFile,
  keyFile,
};

const decoder = new TextDecoder();
for await (const req of serveTLS(options)) {
  const body = JSON.parse(decoder.decode(await Deno.readAll(req.body)));
  req.respond({ body: JSON.stringify({ name: body.name }) });
}
