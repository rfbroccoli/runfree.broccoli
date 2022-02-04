import { Server } from "socket.io";

export default async function socketHandler(req, res) {
  if (!res.socket.server.io) {
    console.log("first time");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      socket.broadcast.emit("a user connected");
      socket.on("hello", (msg) => {
        socket.emit("hello world!");
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("already running");
  }
  res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};
