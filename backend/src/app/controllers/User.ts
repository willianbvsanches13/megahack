/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import UserServices from '../services/User';
import AddressServices from '../services/Address';
import AttachmentServices from '../services/Attachment';
import { AddressInterface } from '../models/Address';
import { AttachmentInterface } from '../models/Attachment';

class User {
  async index(_req: Request, res: Response): Promise<Response> {
    return res.json(await UserServices.index());
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    return res.json(await UserServices.show(id));
  }

  async store(req: Request, res: Response): Promise<Response> {
    console.log('teste', req.body);
    const { address, avatar } = req.body as {
      address: AddressInterface,
      avatar: AttachmentInterface,
    };

    let addressLocal;
    let avatarLocal;

    if (address) {
      addressLocal = await AddressServices.store(address);
      addressLocal = addressLocal ? { address: addressLocal._id } : {};
    }

    if (avatar) {
      avatarLocal = await AttachmentServices.store(avatar);
      avatarLocal = avatarLocal ? { avatar: avatarLocal._id } : {};
    }

    console.log('user', {
      ...req.body,
      ...addressLocal,
      ...avatarLocal,
    });
    const user = await UserServices.store({
      ...req.body,
      ...addressLocal,
      ...avatarLocal,
    });

    return res.json(user);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { address, avatar } = req.body as {
      address: AddressInterface,
      avatar: AttachmentInterface,
    };

    let addressLocal;
    let avatarLocal;

    if (address) {
      addressLocal = await AddressServices.update(address._id, address);
      addressLocal = addressLocal ? { address: addressLocal._id } : {};
    }

    if (avatar) {
      avatarLocal = await AttachmentServices.update(avatar._id, avatar);
      avatarLocal = avatarLocal ? { avatar: avatarLocal._id } : {};
    }

    const user = await UserServices.update(id, {
      ...req.body,
      ...addressLocal,
      ...avatarLocal,
    });

    return res.json(user);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await UserServices.delete(id);

    return res.send();
  }
}

export default new User();
