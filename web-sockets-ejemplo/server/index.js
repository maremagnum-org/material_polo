import express from "express";

import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app, {
  cors: {
    origin: "*",
  },
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
