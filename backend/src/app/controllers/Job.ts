/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import JobServices from '../services/Job';

class Job {
  async index(_req: Request, res: Response): Promise<Response> {
    return res.json(await JobServices.index());
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    return res.json(await JobServices.show(id));
  }

  async store(req: Request, res: Response): Promise<Response> {
    const job = await JobServices.store(req.body);

    return res.json(job);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const job = await JobServices.update(id, req.body);

    return res.json(job);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await JobServices.delete(id);

    return res.send();
  }
}

export default new Job();
