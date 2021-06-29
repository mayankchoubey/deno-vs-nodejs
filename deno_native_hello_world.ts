import { readerFromStreamReader } from "https://deno.land/std/io/streams.ts";

const listener = Deno.listen({ port: 4000 });
for await(const conn of listener)
    handleNewConnection(conn);

async function handleNewConnection(conn: Deno.Conn) {
    for await(const { request, respondWith } of Deno.serveHttp(conn)) {
	respondWith(new Response(JSON.stringify({ body: "Hello world" }), {
		headers: { 'content-type': 'application/json'}
	}));
    }
}
