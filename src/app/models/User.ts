import { Schema, Document, model, HookNextFunction } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AddressInterface } from './Address';
import { ServiceInterface } from './Service';
import { AttachmentInterface } from './Attachment';
import authConfig from '../../config/auth';

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  serviceProvider?: boolean;
  address?: AddressInterface;
  services?: String[];
  avatar?: AttachmentInterface;
  comparePassword: Function;
  generateToken: Function;
}

const User = new Schema<UserInterface>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  serviceProvider: {
    type: Boolean,
    default: false,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  services: {
    type: [String],
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'Attachment',
  },
});

User.pre('save', async function(next: HookNextFunction) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 8);
});

User.methods = {
  comparePassword (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
  },
  generateToken (): string {
    const token = jwt.sign({
        id: this._id,
        email: this.email,
        name: this.name,
      },
      authConfig.secret,
      {
        expiresIn: authConfig.ttl
      }
    );

    return token;
  },
}


export default model<UserInterface>('User', User);
