import dev from "./development";
import prod from "./production";
import test from "./test";
import dotenv from "dotenv";
dotenv.config();

const node_env = process.env.NODE_ENV || "prod";
const configs: any = {
  dev, // development
  prod, // production
  test,
};

export default {
  node_env,
  ...configs[node_env],
};
