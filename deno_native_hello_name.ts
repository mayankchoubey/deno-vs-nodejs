import { readerFromStreamReader } from "https://deno.land/std/io/streams.ts";

const listener = Deno.listen({ port: 3000 });
const td=new TextDecoder();
for await(const conn of listener)
    handleNewConnection(conn);

async function handleNewConnection(conn: Deno.Conn) {
    for await(const { request, respondWith } of Deno.serveHttp(conn)) {
        const reader=request?.body?.getReader();
        if(reader) {
            const rb=await Deno.readAll(readerFromStreamReader(reader));
            const sb=td.decode(rb);
            const ob=JSON.parse(sb);
            respondWith(new Response(JSON.stringify({ name: ob.name }), {
                headers: { 'content-type': 'application/json'}
            }));
        } else
            respondWith(new Response(undefined, {status: 400}));
    }
}