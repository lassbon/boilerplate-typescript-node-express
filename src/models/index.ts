
import { Schema } from 'mongoose';
import { User } from '../types/model';


// Schema
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});