import { createHash } from "https://deno.land/std/hash/mod.ts";
import { Sha1 } from "https://deno.land/std/hash/sha1.ts";
import { Sha512 } from "https://deno.land/std/hash/sha512.ts";

const input="THIS IS AN INPUT";
const input2="THIS IS A LONGER AND LONGER INPUT";
console.log(createHash("md5").update(input).toString());
console.log(createHash("md5").update(input2).toString());
console.log(new Sha1().update(input).hex());
console.log(new Sha1().update(input2).hex());
console.log(new Sha512().update(input).hex());
console.log(new Sha512().update(input2).hex());
