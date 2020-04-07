/* eslint-disable class-methods-use-this */
import ServiceCategoryModel, { ServiceCategoryInterface } from '../models/ServiceCategory';

class ServiceCategory {
  async index(): Promise<ServiceCategoryInterface[] | null> {
    const serviceCategory = await ServiceCategoryModel.find();

    return serviceCategory;
  }

  async show(id: string): Promise<ServiceCategoryInterface | null> {
    const serviceCategory = await ServiceCategoryModel.findById(id);

    return serviceCategory;
  }

  async store(serviceCategoryBody: ServiceCategoryInterface): Promise<ServiceCategoryInterface> {
    const serviceCategory = await ServiceCategoryModel.create(serviceCategoryBody);

    return serviceCategory;
  }

  async update(id: string, serviceCategoryBody: ServiceCategoryInterface): Promise<ServiceCategoryInterface> {
    const serviceCategory = await ServiceCategoryModel.findByIdAndUpdate(id, serviceCategoryBody, { new: true });

    return serviceCategory;
  }

  async delete(id: string): Promise<string> {
    await ServiceCategoryModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new ServiceCategory();
