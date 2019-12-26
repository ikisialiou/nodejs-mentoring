import winston from 'winston';
import * as logform from 'logform';

export class LoggerFormat extends logform.Format {
  label?: string;
}

export interface WinstonLoggerInterface extends winston.Logger {
  format: LoggerFormat;
}

export interface LoggerInterface {
  setRequestInfo: (method: string, path: string) => void;
  error: (message: string, error: Error) => void;
}
