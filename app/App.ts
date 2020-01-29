import express, { Application, Router } from 'express';
import { Logger } from './services/logger/Logger';
import { RouterProps } from './services/router';
import { BooksController } from './modules/books/BoksController';

interface AppInterface {
  start: (port: number, host: string) => void;
}

class App implements AppInterface {
  private app: Application;
  private router: Router;
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
    this.app = express();
    this.router = express.Router();
    this.initRoutes();
  }

  start(port: number, host: string): void {
    this.app.listen(port, () =>
      this.logger.info(`Server is running on http://${host}:${port}`)
    );
  }

  private initRoutes(): void {
    const booksController = new BooksController();
    const routes = Reflect.get(booksController, 'routes');
    routes.forEach((route: RouterProps) => {
      this.router[route.method](route.path, route.action);
    });

    this.app.use('/api', this.router);
  }
}

export default new App();
