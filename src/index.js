import app from './app';
import "dotenv/config";
const http = require("http");
const socketIO = require("socket.io");
require("dotenv").config();

// const PORT = 8080;
const port = process.env.PORT || 3001;

// spawnData();

// const app = express();

// spawnData();

const server = http.createServer(app);
const IOServer = socketIO(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});
IOServer.on("connection", (socket) => {
  socket.on("initialDataUpdate", (data) =>   socket.emit("initialData", data) );
//   setupIntervalDataUpdates(socket);
});

server.listen(port, () => console.log("Server listening on port " + port));

// const server = app.listen(port, () => { console.log("Server listening on port " + port) });

export default server