import { Router } from "express";
import { PurchaseOrderController } from "../controllers";

const PurchaseOrderRouter = Router();

PurchaseOrderRouter.post(
  "/oikos-pro-api/orders/purchases/register",
  // "/oikos-pro-api/:companyId/orders/purchases/register",
  PurchaseOrderController.PurchaseOrderCreator
);
PurchaseOrderRouter.get(
  "/oikos-pro-api/orders/purchases",
  // "/oikos-pro-api/:companyId/orders/purchases",
  PurchaseOrderController.PurchaseOrdersLoader
);
PurchaseOrderRouter.get(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderLoader
);

PurchaseOrderRouter.patch(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderEditor
);

PurchaseOrderRouter.delete(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderDeletor
);

export default PurchaseOrderRouter;
