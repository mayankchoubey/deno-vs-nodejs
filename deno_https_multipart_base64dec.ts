import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { decode } from "https://deno.land/std@0.68.0/encoding/base64.ts";

const router = new Router();
router
    .post("/", async (context) => {
        try {
            const tid=v4.generate();
            const body = await context.request.body({type: 'form-data'});
            const formData = await body.value.read();
            const decoded=decode(formData.fields.base64);
            context.response.body={tid, len: decoded.byteLength};
        } catch(err) {
            console.log(err);
            context.response.body={};
        }
    });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({  port: 8000, 
                    secure: true,
                    certFile: "./certs/localhost.crt",
                    keyFile: "./certs/localhost.key", });

