import { Router } from "express";
import { stuffController } from "../controllers";

const StuffRouter = Router();

StuffRouter.post(
  "/oikos-pro-api/stuffs/register",
  // "/oikos-pro-api/:companyId/stuffs/register",
  stuffController.StuffCreator
);
StuffRouter.get(
  "/oikos-pro-api/stuffs",
  // "/oikos-pro-api/:companyId/stuffs",
  stuffController.StuffsLoader
);
StuffRouter.get(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  stuffController.StuffLoader
);

StuffRouter.patch(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  stuffController.StuffEditor
);

StuffRouter.delete(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  stuffController.StuffDeletor
);

export default StuffRouter;
