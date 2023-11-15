import { Express } from "express";
import ElementRouter from "./Element.router";
import StuffRouter from "./Stuff.router";

const registerRouters = (app: Express): void => {
  app.use(ElementRouter);
  app.use(StuffRouter);
};

export default registerRouters;
