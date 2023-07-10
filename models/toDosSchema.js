import mongoose from "mongoose";
const { Schema } = mongoose;

const toDoModel = new Schema({
  id: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  content: { type: String, default: "" },
  done: { type: Boolean, default: false },
});

// Creates a model, which is a reference to MongoDB collection called "ToDo" and has the given schema/fields/shape
export default mongoose.model("ToDo", toDoModel);
