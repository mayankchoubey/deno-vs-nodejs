import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});

const router = new Router();
router
  .post("/", async (context) => {
    const body = await context.request.body();
    const { key }: { key: string } = await body.value;
    const redisData: any = await redis.get(key);
    const redisObj: any = JSON.parse(redisData!);
    const retObj: any = { tid: v4.generate() }, regex = RegExp("a.*");
    for (const key in redisObj) {
      if (regex.test(key)) {
        retObj[key] = redisObj[key];
      }
    }
    context.response.body = retObj;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 8000 });
