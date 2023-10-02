import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
  );
  console.log("Database connected!");
}

