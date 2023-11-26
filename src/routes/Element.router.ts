import { Router } from "express";
import { ElementController } from "../controllers";

const ElementRouter = Router();

/* ElementRouter.post(
  "/oikos-pro-api/elements/register",
  // "/oikos-pro-api/:companyId/elements/register",
  ElementController.ElementCreator
); */
ElementRouter.get(
  "/oikos-pro-api/elements",
  // "/oikos-pro-api/:companyId/elements",
  ElementController.ElementsLoader
);
/* ElementRouter.get(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  ElementController.ElementLoader
); */

/* ElementRouter.patch(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  ElementController.ElementEditor
); */

/* ElementRouter.delete(
  "/oikos-pro-api/elements/:elementId",
  // "/oikos-pro-api/:companyId/elements/:ElementId",
  ElementController.ElementDeletor
); */

export default ElementRouter;
