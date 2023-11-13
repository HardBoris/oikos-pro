import { Router } from "express";
import { thingController } from "../controllers";

const ThingRouter = Router();

ThingRouter.post(
  "/oikos-pro-api/things/register",
  // "/oikos-pro-api/:companyId/things/register",
  thingController.ThingCreator
);
ThingRouter.get(
  "/oikos-pro-api/things",
  // "/oikos-pro-api/:companyId/things",
  thingController.ThingsLoader
);
ThingRouter.get(
  "/oikos-pro-api/things/:thingId",
  // "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingLoader
);

ThingRouter.patch(
  "/oikos-pro-api/things/:thingId",
  // "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingEditor
);

ThingRouter.delete(
  "/oikos-pro-api/things/:thingId",
  // "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingDeletor
);

export default ThingRouter;
