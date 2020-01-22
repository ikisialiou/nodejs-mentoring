import winston from 'winston';
import { WinstonLoggerInterface, LoggerInterface } from './index';

const { combine, timestamp, colorize, printf } = winston.format;
const env = process.env.NODE_ENV || 'development';

export class Logger implements LoggerInterface {
  private static instance: Logger;
  private logger: WinstonLoggerInterface;
  private requestInfo: string | null = null;

  private constructor() {
    this.logger = winston.createLogger({
      level: env === 'development' ? 'debug' : 'info',
      format: combine(
        timestamp(),
        colorize(),
        printf(
          ({ timestamp, level, message }) =>
            `${timestamp} level=${level.toUpperCase()} ${
              this.requestInfo
            }: ${message}`
        )
      ),

      transports: [new winston.transports.Console({ level: 'silly' })],
    });
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  setRequestInfo(method: string, path: string): void {
    this.logger.format.label = 'skdfkjsdhfjkhsdkjfhsjkdfh';
    this.requestInfo = `method=${method} path=${path}`;
  }

  error(message: string, error?: Error): void {
    this.logger.error(message, error);
  }

  info(message: string): void {
    this.logger.info(message);
  }
}
