import * as http from "http";
import app from "./app";
import config from "./config";

const PORT: number = config.app.port;

http.createServer(app).listen(process.env.PORT || PORT, () => {
  console.log("Express server listening on port " + PORT);
});
