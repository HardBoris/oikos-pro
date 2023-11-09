import { Express } from "express";
import ThingRouter from "./Thing.route";

const registerRouters = (app: Express): void => {
  app.use(ThingRouter);
};

export default registerRouters;
