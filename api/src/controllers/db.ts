import { connect, connection, Connection } from "mongoose";
import config from "../config";
import { IScheduleItemModel, ScheduleItem } from "./../models/scheduleItem";

declare interface IModels {
  ScheduleItem: IScheduleItemModel;
}


export default class DB {
  private static instance: DB;
  private mongoUrl: string = config.db.uri;

  private _db: Connection;
  private _models: IModels;

  private constructor() {
    connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((val) => {
        if (val) {
          this.connected();
        }
      }).catch((err) => this.error(err));
    this._db = connection;
    // this._db.on('open', this.connected);
    // this._db.on('error', this.error);

    this._models = {
      ScheduleItem: new ScheduleItem().model
    };
  }

  public static get Models() {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance._models;
  }

  private connected() {
    console.log('Mongoos has connected');
  }

  private error(error: any) {
    console.log('Mongoose has error', error);
  }
}