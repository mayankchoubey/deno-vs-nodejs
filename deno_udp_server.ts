const server = Deno.listenDatagram({ port: 3000, transport: "udp" });
while (true) {
  const [recvd, remote] = await server.receive();
  await server.send(recvd, remote);
}
server.close();
