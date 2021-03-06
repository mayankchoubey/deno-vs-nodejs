import { doze } from "https://deno.land/x/doze/mod.ts";
import { getMachineId } from "https://deno.land/x/machine_id/mod.ts";

function printNumber(input: number) {
  console.log(input);
}

function printString(input: string) {
  console.log(input);
}

await getMachineId();
await doze(1);
printNumber(1);
printString("One");
console.log(Deno.env.get("TEST_ENV"));
await Deno.truncate("/var/tmp/test.log");
await Deno.writeTextFileSync("/var/tmp/test.log", "hello world");
await Deno.readTextFile("/var/tmp/test.log");
let filename = await Deno.makeTempFile({ prefix: "my_temp" });
await Deno.remove(filename);
filename = await Deno.makeTempFile({ prefix: "my_temp" });
await Deno.remove(filename);
filename = await Deno.makeTempFile({ prefix: "my_temp" });
await Deno.remove(filename);
filename = await Deno.makeTempFile({ prefix: "my_temp" });
await Deno.remove(filename);
