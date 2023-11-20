import express from "express";
import { createServer } from "http";
import apiRouter from "./api/router";
import { connectDB } from "./utils/db/connect";
import env from "./utils/env/env";
import errorHandler from "./utils/middlewares/error-handler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api", apiRouter);

app.use(errorHandler);
const server = createServer(app);
server.listen(env.port, () => {
  try {
    connectDB(env.dbUrl);
    console.log(`Server is listening on port ${env.port}...`);
  } catch (error) {
    console.log(error);
  }
});
