/* eslint-disable class-methods-use-this */
import AttachmentModel, { AttachmentInterface } from '../models/Attachment';

class Attachment {
  async index(): Promise<AttachmentInterface[] | null> {
    const attachment = await AttachmentModel.find();

    return attachment;
  }

  async show(id: string): Promise<AttachmentInterface | null> {
    const attachment = await AttachmentModel.findById(id);

    return attachment;
  }

  async store(attachmentBody: AttachmentInterface): Promise<AttachmentInterface> {
    const attachment = await AttachmentModel.create(attachmentBody);

    return attachment;
  }

  async update(id: string, attachmentBody: AttachmentInterface): Promise<AttachmentInterface> {
    const attachment = await AttachmentModel.findByIdAndUpdate(id, attachmentBody, { new: true });

    return attachment;
  }

  async delete(id: string): Promise<string> {
    await AttachmentModel.findByIdAndDelete(id);

    return 'OK';
  }
}

export default new Attachment();
