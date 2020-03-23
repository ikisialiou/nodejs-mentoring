import { Router } from 'express';
import { defaultRouter } from './default';

export const router = (router: Router): Router => {
  router.use('/api', defaultRouter(router));

  return router;
};
