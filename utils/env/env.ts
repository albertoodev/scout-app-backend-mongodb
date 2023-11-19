import dev from "./development";
import prod from "./production";
import test from "./test";

const env = process.env.NODE_ENV || "dev";

const configs: any = {
  dev, // development
  prod, // production
  test,
};

export default configs[env];
