import { Router } from "express";
import { DetailController } from "../controllers";

const DetailRouter = Router();

/* DetailRouter.post(
  "/oikos-pro-api/Details/register",
  // "/oikos-pro-api/:companyId/Details/register",
  DetailController.DetailCreator
); */
DetailRouter.get(
  "/oikos-pro-api/details",
  // "/oikos-pro-api/:companyId/Details",
  DetailController.DetailsLoader
);
/* DetailRouter.get(
  "/oikos-pro-api/Details/:DetailId",
  // "/oikos-pro-api/:companyId/Details/:DetailId",
  DetailController.DetailLoader
); */

/* DetailRouter.patch(
  "/oikos-pro-api/Details/:DetailId",
  // "/oikos-pro-api/:companyId/Details/:DetailId",
  DetailController.DetailEditor
); */

/* DetailRouter.delete(
  "/oikos-pro-api/Details/:DetailId",
  // "/oikos-pro-api/:companyId/Details/:DetailId",
  DetailController.DetailDeletor
); */

export default DetailRouter;
