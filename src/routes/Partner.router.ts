import { Router } from "express";
import { PartnerController } from "../controllers";

const PartnerRouter = Router();

PartnerRouter.post(
  "/oikos-pro-api/partners/register",
  // "/oikos-pro-api/:companyId/partners/register",
  PartnerController.PartnerCreator
);
PartnerRouter.get(
  "/oikos-pro-api/partners",
  // "/oikos-pro-api/:companyId/partners",
  PartnerController.PartnersLoader
);
PartnerRouter.get(
  "/oikos-pro-api/partners/:partnerId",
  // "/oikos-pro-api/:companyId/partners/:PartnerId",
  PartnerController.PartnerLoader
);

PartnerRouter.patch(
  "/oikos-pro-api/partners/:partnerId",
  // "/oikos-pro-api/:companyId/partners/:PartnerId",
  PartnerController.PartnerEditor
);

PartnerRouter.delete(
  "/oikos-pro-api/partners/:partnerId",
  // "/oikos-pro-api/:companyId/partners/:PartnerId",
  PartnerController.PartnerDeletor
);

export default PartnerRouter;
