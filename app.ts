import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import apiRouter from "./api/router";
import { connectDB } from "./utils/db/connect";
import env from "./utils/env/env";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api", apiRouter);

const server = createServer(app);
server.listen(env.port, () => {
  try {
    connectDB(env.dbUrl);
    console.log(`Server is listening on port ${env.port}...`);
  } catch (error) {
    console.log(error);
  }
});
