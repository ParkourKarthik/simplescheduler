import * as http from "http";
import app from "./app";
import config from "./config";

const PORT: number = process.env.PORT || config.app.port;

http.createServer(app).listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
