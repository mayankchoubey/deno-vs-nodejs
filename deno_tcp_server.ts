//const listener = Deno.listen({ hostname: '127.0.0.1', port: 4544});
const listener = Deno.listenTls({ hostname: 'localhost', port: 4544, certFile: './certs/localhost.crt', keyFile: './certs/localhost.key'});
const conn=await listener.accept();
await Deno.copy(conn, conn);
conn.close();
listener.close();
