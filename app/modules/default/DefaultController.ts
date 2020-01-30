import { Request, Response, NextFunction } from 'express';

class DefaultController {
  defaultRouter(req: Request, res: Response, next: NextFunction): void {
    res.send('Aue');
  }
}

export const defaultController = new DefaultController();
