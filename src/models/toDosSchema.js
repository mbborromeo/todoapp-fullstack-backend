import mongoose from "mongoose";
const { Schema } = mongoose;

const toDoModel = new Schema({
  // _id is automatically created: https://mongoosejs.com/docs/guide.html#_id
  createdAt: { type: Date, default: Date.now },
  content: { type: String },
  doneAt: { type: Date, default: undefined },
});

// Creates a model, which is a reference to MongoDB collection called "todos" and has the given schema/fields/shape
// source: https://mongoosejs.com/docs/models.html
// The first argument is the singular capitalized name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// eg. the model 'Tank' is for the 'tanks' collection in the database.
export default mongoose.model("Todo", toDoModel);
