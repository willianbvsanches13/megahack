import { Schema, Document, model } from 'mongoose';

export interface AddressInterface extends Document {
  zipcode: string;
  street: string;
  district: string;
  number: string;
  complement: string;
  latitude: string;
  longitude: string;
}

const Address = new Schema({
  zipcode: {
    type: String,
  },
  street: {
    type: String,
  },
  district: {
    type: String,
  },
  number: {
    type: String,
  },
  complement: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

export default model<AddressInterface>('Address', Address);
