import { Router } from "express";
import { PurchaseRequestController } from "../controllers";

const PurchaseRequestRouter = Router();

PurchaseRequestRouter.post(
  "/oikos-pro-api/purchase-requests/register",
  // "/oikos-pro-api/:companyId/purchase-request/register",
  PurchaseRequestController.PurchaseRequestCreator
);
PurchaseRequestRouter.get(
  "/oikos-pro-api/purchase-requests",
  // "/oikos-pro-api/:companyId/purchase-request",
  PurchaseRequestController.PurchaseRequestsLoader
);
PurchaseRequestRouter.get(
  "/oikos-pro-api/purchase-requests/:purchaseRequestId",
  // "/oikos-pro-api/:companyId/purchase-request/:PurchaseRequestId",
  PurchaseRequestController.PurchaseRequestLoader
);

PurchaseRequestRouter.patch(
  "/oikos-pro-api/purchase-requests/:purchaseRequestId",
  // "/oikos-pro-api/:companyId/purchase-request/:PurchaseRequestId",
  PurchaseRequestController.PurchaseRequestEditor
);

PurchaseRequestRouter.delete(
  "/oikos-pro-api/purchase-requests/:purchaseRequestId",
  // "/oikos-pro-api/:companyId/purchase-request/:PurchaseRequestId",
  PurchaseRequestController.PurchaseRequestDeletor
);

export default PurchaseRequestRouter;
