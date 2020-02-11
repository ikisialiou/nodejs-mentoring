import { defaultController } from './DefaultController';
import { Router } from 'express';

export const defaultRouter = (router: Router): Router => {
  router.get('/', defaultController.defaultRouter);

  return router;
};
