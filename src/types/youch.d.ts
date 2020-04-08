import { Request } from 'express';

declare module 'youch' {
  export default class Youch {
    constructor(err: ErrorEvent, req: Request);

    public toJSON(): Promise<String>;
  }
}
