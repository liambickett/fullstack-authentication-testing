import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
  googleID: String,
});

mongoose.model('users', userSchema);
