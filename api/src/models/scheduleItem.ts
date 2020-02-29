import { Document, model, Model, Schema, DocumentQuery } from 'mongoose';

export declare interface IScheduleItem extends Document {
  _id: string;
  title: string;
  desc: string;
  time: Date;
  online: Boolean;
  type: MeetingType;
}

enum MeetingType {
  dev,
  design,
  database,
  personal
}

export const getMeetingTypes = () => {
  let arr: Array<String> = [];
  for (let i in MeetingType) {
    if (typeof MeetingType[i] === 'string') {
      arr.push(MeetingType[i]);
    }
  }
  return arr;
};

export interface IScheduleItemModel extends Model<IScheduleItem> {}

export class ScheduleItem {
  private _model: Model<IScheduleItem>;

  constructor() {
    const ScheduleItemSchema = new Schema({
      title: { type: String, required: true },
      desc: { type: String, required: true },
      time: Date,
      online: Boolean,
      type: {
        type: String,
        enum: getMeetingTypes(),
        default: MeetingType[MeetingType.dev]
      }
    });
    this._model = model<IScheduleItem>('Schedules', ScheduleItemSchema);
  }

  public get model(): Model<IScheduleItem> {
    return this._model;
  }
}
