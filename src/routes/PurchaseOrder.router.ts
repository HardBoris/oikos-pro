import { Router } from "express";
import { PurchaseOrderController } from "../controllers";

const PurchaseOrderRouter = Router();

PurchaseOrderRouter.post(
  "/oikos-pro-api/orders/purchase-orders/register",
  // "/oikos-pro-api/:companyId/orders/purchase-orders/register",
  PurchaseOrderController.PurchaseOrderCreator
);
PurchaseOrderRouter.get(
  "/oikos-pro-api/orders/purchase-orders",
  // "/oikos-pro-api/:companyId/orders/purchase-orders",
  PurchaseOrderController.PurchaseOrdersLoader
);
PurchaseOrderRouter.get(
  "/oikos-pro-api/orders/purchase-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchase-orders/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderLoader
);

PurchaseOrderRouter.patch(
  "/oikos-pro-api/orders/purchase-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchase-orders/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderEditor
);

PurchaseOrderRouter.delete(
  "/oikos-pro-api/orders/purchase-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchase-orders/:PurchaseOrderId",
  PurchaseOrderController.PurchaseOrderDeletor
);

export default PurchaseOrderRouter;
