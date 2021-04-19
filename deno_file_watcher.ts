const watcher=Deno.watchFs(["/var/tmp/", "../"], { recursive: false});

for await(const event of watcher)
    console.log(event);

