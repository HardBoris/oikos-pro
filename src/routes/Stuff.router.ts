import { Router } from "express";
import { StuffController } from "../controllers";

const StuffRouter = Router();

StuffRouter.post(
  "/oikos-pro-api/stuffs/register",
  // "/oikos-pro-api/:companyId/stuffs/register",
  StuffController.StuffCreator
);
StuffRouter.get(
  "/oikos-pro-api/stuffs",
  // "/oikos-pro-api/:companyId/stuffs",
  StuffController.StuffsLoader
);
StuffRouter.get(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  StuffController.StuffLoader
);

StuffRouter.patch(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  StuffController.StuffEditor
);

StuffRouter.delete(
  "/oikos-pro-api/stuffs/:stuffId",
  // "/oikos-pro-api/:companyId/stuffs/:StuffId",
  StuffController.StuffDeletor
);

export default StuffRouter;
