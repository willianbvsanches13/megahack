import { Schema, Document, model } from 'mongoose';
import { ServiceCategoryInterface } from './ServiceCategory';

export interface ServiceInterface extends Document {
  name: string;
  category: ServiceCategoryInterface;
}

const Service = new Schema({
  name: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceCategory',
  },
});

export default model<ServiceInterface>('Service', Service);
