import { readerFromStreamReader } from "https://deno.land/std/io/streams.ts";

const listener = Deno.listen({ port: 3000 });
for await(const conn of listener)
    handleNewConnection(conn);

async function handleNewConnection(conn: Deno.Conn) {
    for await(const { request, respondWith } of Deno.serveHttp(conn)) {
        const reader=request?.body?.getReader();
        if(reader) {
            const rb=await Deno.readAll(readerFromStreamReader(reader));
            respondWith(new Response(JSON.stringify({ uploadedLen: rb.length }), {
                headers: { 'content-type': 'application/json'}
            }));
        } else
            respondWith(new Response(undefined, {status: 400}));
    }
}