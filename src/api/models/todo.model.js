import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('Todo', todoSchema);
