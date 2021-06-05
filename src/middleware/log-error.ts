import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: './logs/info.log', level: 'info' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});

export const log = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, body, params } = req;

  next();
  finished(res, () => {
    const { statusCode } = res;
    logger.info(
      `${method} - ${url} - ${statusCode} - ${JSON.stringify(
        body
      )} - ${JSON.stringify(params)}`
    );
  });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { method, url } = req;
  res.status(404 || 500);
  res.send('Page not found');
  logger.error(`${url} - ${method} - ${err.message}`);
};

process.on('uncaughtException', (error: Error) => {
  console.error(error);
  logger.error(error.message);
  process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  console.error(error);
  logger.error(error.message);
  process.exit(1);
});
