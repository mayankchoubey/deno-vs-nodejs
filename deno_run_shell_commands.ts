const p=Deno.run({ cmd: [ "/var/tmp/a.sh", 
                          "-a" ] });
setTimeout(() => p.kill(9), 1000);
console.log(await p.status());