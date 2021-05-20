import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";
import { MultipartReader } from "https://deno.land/std/mime/mod.ts";
const s = serve({ port: 3000 });
for await (const req of s) {
    handleRequest(req);
}

async function handleRequest(req: ServerRequest) {
    const ct = req.headers.get("content-type");
    const boundary = ct?.split(";")[1].split("=")[1] || "";
    const mr = new MultipartReader(req.body, boundary);
    const form = await mr.readForm();
    const retBody = {
        body: { name: form.value("name"), age: form.value("age") },
    };
    req.respond({ body: JSON.stringify(retBody) });
}
