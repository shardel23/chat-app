import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./socket/types";

const app = express();
app.use(cors());
const httpServer = createServer();

app.get("/", (req, res) => {
  res.send("Well done!");
});

const server = app.listen(3001, () => {
  console.log("The application is listening on port 3001!");
});

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("hello", () => {
    console.log("Got hello");
  });
});
