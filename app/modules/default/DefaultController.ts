import { Request, Response, NextFunction } from 'express';
import { DefaultService } from './DefaultService';

class DefaultController {
  private defaultService: DefaultService;

  constructor() {
    this.defaultService = new DefaultService();
  }

  defaultRouter = (req: Request, res: Response, next: NextFunction): void => {
    const response = this.defaultService.defaultAction();

    res.send(response);
  };
}

export const defaultController = new DefaultController();
