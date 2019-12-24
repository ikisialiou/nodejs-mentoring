import http from 'http';

interface AppInterface {
  start: (port: number, host: string) => void;
}

class App implements AppInterface {
  private app: http.Server;

  constructor() {
    this.app = http.createServer(
      (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.write('Aue');
        res.end();
      }
    );
  }

  start(port: number, host: string): void {
    this.app.listen(port, () =>
      console.log(`Server is running on http://${host}:${port}`)
    );
  }
}

export default new App();
