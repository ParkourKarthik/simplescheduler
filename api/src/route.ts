import { Request, Response, Application } from 'express';
import { ScheduleController } from './controllers/Schedule';

export class Routes {
  public sheduleController: ScheduleController = new ScheduleController();

  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request Successfull!!'
      });
    });

    app
      .route('/schedules')
      .get(this.sheduleController.GetAll)
      .put(this.sheduleController.Update)
      .post(this.sheduleController.Add);

    app
      .route('/schedules/:id')
      .get(this.sheduleController.GetById)
      .delete(this.sheduleController.Delete);

    app.route('/scheduleTypes').get(this.sheduleController.GetTypes);
  }
}
