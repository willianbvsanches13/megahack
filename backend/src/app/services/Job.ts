/* eslint-disable class-methods-use-this */
import JobModel, { JobInterface } from '../models/Job';

class Job {
  async index(): Promise<JobInterface[] | null> {
    const job = await JobModel.find();

    return job;
  }

  async show(id: string): Promise<JobInterface | null> {
    const job = await JobModel.findById(id);

    return job;
  }

  async store(jobBody: JobInterface): Promise<JobInterface> {
    const job = await JobModel.create(jobBody);

    return job;
  }

  async update(id: string, jobBody: JobInterface): Promise<JobInterface> {
    const job = await JobModel.findByIdAndUpdate(id, jobBody, { new: true });

    return job;
  }

  async delete(id: string): Promise<string> {
    await JobModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new Job();
