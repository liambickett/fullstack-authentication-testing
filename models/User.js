import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
  googleID: String,
  name: String,
});

mongoose.model('users', userSchema);
