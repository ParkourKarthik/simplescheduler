import { Document, model, Model, Schema, DocumentQuery } from "mongoose";

export declare interface IScheduleItem extends Document {
  _id: string;
  title: string;
  desc: string;
  time: Date;
}

export interface IScheduleItemModel extends Model<IScheduleItem> {}

export class ScheduleItem {
  private _model: Model<IScheduleItem>;

  constructor() {
    const ScheduleItemSchema = new Schema({
      title: { type: String, required: true },
      desc: { type: String, required: true },
      time: Date
    });
    this._model = model<IScheduleItem>("Schedules", ScheduleItemSchema);
  }

  public get model(): Model<IScheduleItem> {
    return this._model;
  }
}
