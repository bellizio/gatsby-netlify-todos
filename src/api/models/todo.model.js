import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    name: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default mongoose.model('Todo', todoSchema);
