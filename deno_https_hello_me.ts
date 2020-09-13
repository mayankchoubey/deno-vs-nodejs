import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

router
    .post("/", async (context) => {
        try {
            const body = await context.request.body({type: 'json'});
            const bodyJson = await body.value;
            context.response.body={ body: `Hello ${bodyJson.name}` };
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

