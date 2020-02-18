import * as bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
import { Routes } from "./route";

class App {
  public app: Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;