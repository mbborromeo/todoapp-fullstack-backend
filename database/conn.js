import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    `mongodb+srv://admin:${process.env.ATLAS_PASS}@todo.lfngju1.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Database connected!");
}
