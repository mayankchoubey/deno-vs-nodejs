const str="TO WRITE INTO A FILE\n";
const filePath="/var/tmp/a.file";

await Deno.writeTextFile(filePath, str);

const file1=await Deno.open(filePath, { create: true, write: true, truncate: true});
file1.writeSync(new TextEncoder().encode(str));
file1.close();

const file2=await Deno.open(filePath, { create: true, append: true});
await file2.write(new TextEncoder().encode(str));
await Deno.writeAll(file2, new TextEncoder().encode(str));
file2.close();
