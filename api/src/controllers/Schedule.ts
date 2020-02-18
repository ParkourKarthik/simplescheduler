import { Request, Response, request } from "express";
import DB from "./db";

export class ScheduleController {
  public Add(req: Request, res: Response) {
    const newSchedule = new DB.Models.ScheduleItem(req.body);
    newSchedule.save((err, schedule) => {
      if (err) {
        res.send(err);
      } else {
        res.json(schedule);
      }
    });
  }

  public GetById(req: Request, res: Response) {
    const scheduleId = req.params.id;
    DB.Models.ScheduleItem.findById(scheduleId, (err, schedule) => {
      if (err) res.send(err);
      res.json(schedule);
    });
  }

  public GetAll(req: Request, res: Response) {
    DB.Models.ScheduleItem.find({}, (err, schedules) => {
      if (err) res.send(err);
      res.json(schedules);
    });
  }

  public Update(req: Request, res: Response) {
    DB.Models.ScheduleItem.findByIdAndUpdate(
      req.body._id,
      req.body,
      (err, user) => {
        if (err) res.send(err);
        else res.sendStatus(200);
      }
    );
  }

  public Delete(req: Request, res: Response) {
    const scheduleId = req.params.id;
    DB.Models.ScheduleItem.findByIdAndDelete(scheduleId, (err, user) => {
      if (err) res.send(err);
      res.json({ message: "Successfully Deleted" });
    });
  }
}
