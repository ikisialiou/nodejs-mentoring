import http from 'http';
import { Logger } from './services/logger/Logger';

interface AppInterface {
  start: (port: number, host: string) => void;
}

class App implements AppInterface {
  private app: http.Server;
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
    this.app = http.createServer(
      (req: http.IncomingMessage, res: http.ServerResponse) => {
        this.logger.setRequestInfo(req.method || '', req.url || '');
        this.logger.info('Getting some info');
        res.write('Aue');
        res.end();
      }
    );
  }

  start(port: number, host: string): void {
    this.app.listen(port, () =>
      this.logger.info(`Server is running on http://${host}:${port}`)
    );
  }
}

export default new App();
