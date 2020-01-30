import express, { Application, Request, Response, NextFunction } from 'express';
import { Logger } from './services/logger/Logger';
import { router } from './modules/Router';

interface AppInterface {
  start: (port: number, host: string) => void;
}

class App implements AppInterface {
  private app: Application;
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
    this.app = express();
  }

  start(port: number, host: string): void {
    this.initLoggerMiddleware();
    this.initRouter();

    this.app.listen(port, () =>
      this.logger.info(`Server is running on http://${host}:${port}`)
    );
  }

  private initLoggerMiddleware(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      this.logger.setRequestInfo(req.method || '', req.url || '');

      next();
    });
  }

  private initRouter(): void {
    this.app.use('/', router);
  }
}

export default new App();
