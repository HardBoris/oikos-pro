import { Router } from "express";
import { OrderController } from "../controllers";

const OrderRouter = Router();

/* OrderRouter.post(
  "/oikos-pro-api/orders/register",
  // "/oikos-pro-api/:companyId/orders/register",
  OrderController.OrderCreator
); */
OrderRouter.get(
  "/oikos-pro-api/orders",
  // "/oikos-pro-api/:companyId/orders",
  OrderController.OrdersLoader
);
/* OrderRouter.get(
  "/oikos-pro-api/orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/:OrderId",
  OrderController.OrderLoader
); */

/* OrderRouter.patch(
  "/oikos-pro-api/orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/:OrderId",
  OrderController.OrderEditor
); */

/* OrderRouter.delete(
  "/oikos-pro-api/orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/:OrderId",
  OrderController.OrderDeletor
); */

export default OrderRouter;
