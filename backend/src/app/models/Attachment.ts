import { Schema, Document, model } from 'mongoose';

export interface AttachmentInterface extends Document {
  url: string;
}

const Attachment = new Schema({
  url: {
    type: String,
  },
});

export default model<AttachmentInterface>('Attachment', Attachment);
