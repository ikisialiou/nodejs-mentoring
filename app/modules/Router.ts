import { Router } from 'express';
import { defaultRouter } from './default';

export const router = Router();
router.use('/api', defaultRouter);
