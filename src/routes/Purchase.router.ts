import { Router } from "express";
import { PurchaseController } from "../controllers";

const PurchaseRouter = Router();

PurchaseRouter.post(
  "/oikos-pro-api/orders/purchases/register",
  // "/oikos-pro-api/:companyId/orders/purchases/register",
  PurchaseController.PurchaseCreator
);
PurchaseRouter.get(
  "/oikos-pro-api/orders/purchases",
  // "/oikos-pro-api/:companyId/orders/purchases",
  PurchaseController.PurchasesLoader
);
PurchaseRouter.get(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseId",
  PurchaseController.PurchaseLoader
);

PurchaseRouter.patch(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseId",
  PurchaseController.PurchaseEditor
);

PurchaseRouter.delete(
  "/oikos-pro-api/orders/purchases/:orderId",
  // "/oikos-pro-api/:companyId/orders/purchases/:PurchaseId",
  PurchaseController.PurchaseDeletor
);

export default PurchaseRouter;
