import express from "express";
import "express-async-errors";
import { createServer } from "http";
import { connectDB } from "./utils/db/connect";
import constants from "./utils/constants/constants";
import errorHandler from "./utils/middlewares/error-handler";
import apiRouter from "./api/v1/router";
import validateBodyInputs from "./utils/middlewares/validate-body-inputs";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// validate body inputs middleware (checks if inputs are valid based on regExp)
app.use(validateBodyInputs);

// api routes
app.use(`/api/v1`, apiRouter);

// error handler middleware
app.use(errorHandler);

const server = createServer(app);
server.listen(constants.port, async () => {
  try {
    await connectDB(constants.dbUrl);
    console.log(`Server is listening on port ${constants.port}...`);
  } catch (error) {
    console.log(error);
  }
});
