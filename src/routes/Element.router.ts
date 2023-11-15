import { Router } from "express";
import { elementController } from "../controllers";

const ElementRouter = Router();

ElementRouter.post(
  "/oikos-pro-api/elements/register",
  // "/oikos-pro-api/:companyId/elements/register",
  elementController.ElementCreator
);
ElementRouter.get(
  "/oikos-pro-api/elements",
  // "/oikos-pro-api/:companyId/elements",
  elementController.ElementsLoader
);
ElementRouter.get(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  elementController.ElementLoader
);

ElementRouter.patch(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  elementController.ElementEditor
);

ElementRouter.delete(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  elementController.ElementDeletor
);

export default ElementRouter;
