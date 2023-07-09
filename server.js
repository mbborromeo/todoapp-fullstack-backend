import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import router from "./router/route.js";

/* import database connection file */
import connect from "./database/conn.js";

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

/* if we have a valid connection to mongoDB database, then start server */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection!");
  });
