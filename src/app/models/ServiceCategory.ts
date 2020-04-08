import { Schema, Document, model } from 'mongoose';

export interface ServiceCategoryInterface extends Document {
  name: string;
}

const ServiceCategory = new Schema({
  name: {
    type: String,
  },
});

export default model<ServiceCategoryInterface>('ServiceCategory', ServiceCategory);
