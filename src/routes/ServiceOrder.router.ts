import { Router } from "express";
import { ServiceOrderController } from "../controllers";

const ServiceOrderRouter = Router();

ServiceOrderRouter.post(
  "/oikos-pro-api/orders/service-orders/register",
  // "/oikos-pro-api/:companyId/orders/service-orders/register",
  ServiceOrderController.ServiceOrderCreator
);
ServiceOrderRouter.get(
  "/oikos-pro-api/orders/service-orders",
  // "/oikos-pro-api/:companyId/orders/service-orders",
  ServiceOrderController.ServiceOrdersLoader
);
ServiceOrderRouter.get(
  "/oikos-pro-api/orders/service-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/service-orders/:ServiceOrderId",
  ServiceOrderController.ServiceOrderLoader
);

ServiceOrderRouter.patch(
  "/oikos-pro-api/orders/service-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/service-orders/:ServiceOrderId",
  ServiceOrderController.ServiceOrderEditor
);

ServiceOrderRouter.delete(
  "/oikos-pro-api/orders/service-orders/:orderId",
  // "/oikos-pro-api/:companyId/orders/service-orders/:ServiceOrderId",
  ServiceOrderController.ServiceOrderDeletor
);

export default ServiceOrderRouter;
