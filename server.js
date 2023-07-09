import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import router from "./router/route.js";

const app = express();

/* app middleware */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/* application port */
const port = process.env.PORT || 8080;

/* Routes */
app.get("/", (req, res) => {
  try {
    res.json("GET request");
  } catch (error) {
    res.json(error);
  }
});

/* API routes */
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
