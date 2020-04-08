import express, {
  Application, Request, Response, NextFunction,
} from 'express';
import Youch from 'youch';
import cors from 'cors';
import './database';

import routes from './routes';

class Server {
  public server: Application;

  public constructor() {
    this.server = express();

    this.middleware();
    this.routes();
    // this.exceptionHandler();
  }

  private middleware(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private exceptionHandler(): void {
    this.server.use(async (err: Error, req: Request, res: Response, _next: NextFunction) => {
      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'homologation') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new Server().server;
