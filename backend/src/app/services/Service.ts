/* eslint-disable class-methods-use-this */
import ServiceModel, { ServiceInterface } from '../models/Service';

class Service {
  async index(): Promise<ServiceInterface[] | null> {
    const service = await ServiceModel.find();

    return service;
  }

  async show(id: string): Promise<ServiceInterface | null> {
    const service = await ServiceModel.findById(id);

    return service;
  }

  async store(serviceBody: ServiceInterface): Promise<ServiceInterface> {
    const service = await ServiceModel.create(serviceBody);

    return service;
  }

  async update(id: string, serviceBody: ServiceInterface): Promise<ServiceInterface> {
    const service = await ServiceModel.findByIdAndUpdate(id, serviceBody, { new: true });

    return service;
  }

  async delete(id: string): Promise<string> {
    await ServiceModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new Service();
