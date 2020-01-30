import express from 'express';
import { defaultController } from './DefaultController';

export const defaultRouter = express();
defaultRouter.get('/', defaultController.defaultRouter);
