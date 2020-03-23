import { Request, Response, NextFunction } from 'express';
import { DefaultService } from './DefaultService';

class DefaultController {
  private defaultService: DefaultService;

  constructor() {
    this.defaultService = new DefaultService();
  }

  defaultRouter = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const response = await this.defaultService.defaultAction();

      res.send(response);
    } catch (err) {
      res.send({
        code: '322',
        message: err.message,
      });
    }
  };
}

export const defaultController = new DefaultController();
