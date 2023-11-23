import express, { Request, Response } from "express";
import "express-async-errors";
import { createServer } from "http";
import { connectDB } from "./utils/db/connect";
import env from "./utils/env/env";
import errorHandler from "./utils/middlewares/error-handler";
import apiRouter from "./api/v1/router";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// api routes

app.use(`/api/v1`, apiRouter);

// error handler middleware
app.use(errorHandler);

const server = createServer(app);
server.listen(env.port, async () => {
  try {
    await connectDB(env.dbUrl);
    console.log(`Server is listening on port ${env.port}...`);
  } catch (error) {
    console.log(error);
  }
});
