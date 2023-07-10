import mongoose from "mongoose";
const { Schema } = mongoose;

/* To Do's collection model */
// const toDosModel = new Schema({
//   list: { type: Array, default: [] },
// });

const toDoModel = new Schema({
  id: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  content: { type: String, default: "" },
  done: { type: Boolean, default: false },
});

// export const toDos = mongoose.model("ToDos", toDosModel);
export const toDo = mongoose.model("ToDo", toDoModel);
