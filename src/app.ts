import express from 'express';
import { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';

import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { log, errorHandler } from './middleware/log-error';

const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});
app.use(log);

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error = new Error('Not found');
  next(error);
});
app.use(errorHandler);

export default app;
