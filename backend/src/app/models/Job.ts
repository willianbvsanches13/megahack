import { Schema, Document, model } from 'mongoose';

export interface JobInterface extends Document {
  name: string;
}

const Job = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['searching', 'providing', 'cancel', 'end'],
  },
});

export default model<JobInterface>('Job', Job);
