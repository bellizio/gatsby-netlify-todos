import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  completed: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('Todo', todoSchema);
