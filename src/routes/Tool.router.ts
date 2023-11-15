import { Router } from "express";
import { ToolController } from "../controllers";

const ToolRouter = Router();

ToolRouter.post(
  "/oikos-pro-api/tools/register",
  // "/oikos-pro-api/:companyId/tools/register",
  ToolController.ToolCreator
);
ToolRouter.get(
  "/oikos-pro-api/tools",
  // "/oikos-pro-api/:companyId/tools",
  ToolController.ToolsLoader
);
ToolRouter.get(
  "/oikos-pro-api/tools/:toolId",
  // "/oikos-pro-api/:companyId/tools/:ToolId",
  ToolController.ToolLoader
);

ToolRouter.patch(
  "/oikos-pro-api/tools/:toolId",
  // "/oikos-pro-api/:companyId/tools/:ToolId",
  ToolController.ToolEditor
);

ToolRouter.delete(
  "/oikos-pro-api/tools/:toolId",
  // "/oikos-pro-api/:companyId/tools/:ToolId",
  ToolController.ToolDeletor
);

export default ToolRouter;
