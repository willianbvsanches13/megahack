/* eslint-disable class-methods-use-this */
import AddressModel, { AddressInterface } from '../models/Address';

class Address {
  async index(): Promise<AddressInterface[] | null> {
    const address = await AddressModel.find();

    return address;
  }

  async show(id: string): Promise<AddressInterface | null> {
    const address = await AddressModel.findById(id);

    return address;
  }

  async store(addressBody: AddressInterface): Promise<AddressInterface> {
    const address = await AddressModel.create(addressBody);

    return address;
  }

  async update(id: string, addressBody: AddressInterface): Promise<AddressInterface> {
    const address = await AddressModel.findByIdAndUpdate(id, addressBody, { new: true });

    return address;
  }

  async delete(id: string): Promise<string> {
    await AddressModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new Address();
