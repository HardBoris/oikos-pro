import { Express } from "express";
import ElementRouter from "./Element.router";
import StuffRouter from "./Stuff.router";
import MidiaRouter from "./Midia.router";
import ToolRouter from "./Tool.router";
import PurchaseRequestRouter from "./PurchaseRequest.router";
import OrderRouter from "./Order.router";
import PurchaseRouter from "./Purchase.router";
import PurchaseOrderRouter from "./PurchaseOrder.router";

const registerRouters = (app: Express): void => {
  app.use(ElementRouter);
  app.use(StuffRouter);
  app.use(MidiaRouter);
  app.use(ToolRouter);
  app.use(PurchaseRequestRouter);
  app.use(OrderRouter);
  app.use(PurchaseRouter);
  app.use(PurchaseOrderRouter);
};

export default registerRouters;
