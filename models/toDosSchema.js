import mongoose from "mongoose";
const { Schema } = mongoose;

const toDoModel = new Schema({
  // _id is automatically created: https://mongoosejs.com/docs/guide.html#_id
  createdAt: { type: Date, default: Date.now },
  content: { type: String },
  doneAt: { type: Date, default: undefined },
});

// Creates a model, which is a reference to MongoDB collection called "ToDo" and has the given schema/fields/shape
export default mongoose.model("ToDo", toDoModel);
