/* eslint-disable class-methods-use-this */
import UserModel, { UserInterface } from '../models/User';

class User {
  async index(): Promise<UserInterface[] | null> {
    const user = await UserModel.find();

    return user;
  }

  async show(id: string): Promise<UserInterface | null> {
    const user = await UserModel.findById(id);

    return user;
  }

  async showByEmail(email: string): Promise<UserInterface | null> {
    const user = await UserModel.findOne({ email });

    return user;
  }


  async store(userBody: UserInterface): Promise<UserInterface> {
    const user = await UserModel.create(userBody);

    return user;
  }

  async update(id: string, userBody: UserInterface): Promise<UserInterface | null> {
    const user = await UserModel.findByIdAndUpdate(id, userBody, { new: true });

    return user;
  }

  async delete(id: string): Promise<string> {
    await UserModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new User();
